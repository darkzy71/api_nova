const chatForm = document.getElementById('chat-form')
const chatMessages = document.querySelector('.chat-messages')
const roomName = document.getElementById('room-name')
const usersList = document.getElementById('users')

// Get username and room from URL
const {username, room} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})

const socket = io()

// Join chatroom
socket.emit('joinRoom', {username, room})

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
    outputRoomName(room)
    outputUsers(users)
})

socket.on('message', message => {
    outputMessage(message)

    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight
})

// Message submit
chatForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // Get message text
    const msg = event.target.elements.msg.value

    // Emit message to server
    socket.emit('chatMessage', msg)

    // Clear input
    event.target.elements.msg.value = ''
    event.target.elements.msg.focus()
})

const outputMessage = message => {
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `
        <p class="meta">${message.username} <span>${message.time}</span></p>
        <p class="text">${message.text}</p>
    `
    document.querySelector('.chat-messages').appendChild(div)
}

// Add room name to DOM
const outputRoomName = room => {
    roomName.innerText = room
}

// Add users to DOM
const outputUsers = users => {
    usersList.innerHTML = `
        ${users.map(user => `<li>${user.username}</li>`).join('')}
    `
}
