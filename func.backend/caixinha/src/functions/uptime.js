module.exports = (message) => {
	if (!message) throw new Error('message não definida!');
	let time = message.client.uptime;
	let round = time > 0 ? Math.floor : Math.ceil;

	let d = round(time / 86400000);
	if (d > 0) { if (d.toString().length < 2) { d = '0' + d + 'd, '; } else { d = d + 'd, '; } } else { d = ''; }

	let h = round(time / 3600000) % 24;
	if (h > 0) { if (h.toString().length < 2) { h = '0' + h + 'h, '; } else { h = h + 'h, '; } } else { h = ''; }

	let m = round(time / 60000) % 60;
	if (m > 0) { if (m.toString().length < 2) { m = '0' + m + 'm, '; } else { m = m + 'm, '; } } else { m = ''; }

	let s = round(time / 1000) % 60; 
    if (s.toString().length < 2) { s = '0' + s + 's'; } else { s = s + 's'; }

	let uptime = d + h + m + s;
	return uptime
}