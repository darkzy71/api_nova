module.exports = async (type, msg, pages, emojiList, timeout) => {
    if(!type) throw new Error('Type não definido!')
    if(type === 'dm') {

    if(!msg && !msg.channel) throw new Error('Canal inacessível!');
    if(!pages) throw new Error('Paginas não definidas!');
    if(emojiList.length !== 2) throw new Error('Requer 2 emojis!');
    if(!timeout) throw new Error('Timeout não definido!');
    let page = 0;
    const curPage = await msg.author.send(pages[page].setFooter(`Página ${page + 1} / ${pages.length}`));
    for (const emoji of emojiList) await curPage.react(emoji);
    const reactionCollector = curPage.createReactionCollector(
        (reaction, user) => emojiList.includes(reaction.emoji.name) && user.id === msg.author.id,
        { time: timeout }
    );
    reactionCollector.on('collect', reaction => {
        reaction.users.remove(msg.author);
        switch (reaction.emoji.name) {
            case emojiList[0]:
                page = page > 0 ? --page : pages.length - 1;
                break;
            case emojiList[1]:
                page = page + 1 < pages.length ? ++page : 0;
                break;
            default:
                break;
        }
        curPage.edit(pages[page].setFooter(`Página ${page + 1} / ${pages.length}`));
    });
    reactionCollector.on('end', () => curPage.reactions.removeAll());
    return curPage;

  } else if(type === 'guild') {

    if(!msg && !msg.channel) throw new Error('Canal inacessível!');
    if(!pages) throw new Error('Paginas não definidas!');
    if(emojiList.length !== 2) throw new Error('Requer 2 emojis!');
    if(!timeout) throw new Error('Timeout não definido!');
      let page = 0;
      const curPage = await msg.channel.send(pages[page].setFooter(`Página ${page + 1} / ${pages.length}`));
      for (const emoji of emojiList) await curPage.react(emoji);
      const reactionCollector = curPage.createReactionCollector(
          (reaction, user) => emojiList.includes(reaction.emoji.name) && user.id === msg.author.id,
          { time: timeout }
      );
      reactionCollector.on('collect', reaction => {
          reaction.users.remove(msg.author);
          switch (reaction.emoji.name) {
              case emojiList[0]:
                  page = page > 0 ? --page : pages.length - 1;
                  break;
              case emojiList[1]:
                  page = page + 1 < pages.length ? ++page : 0;
                  break;
              default:
                  break;
          }
          curPage.edit(pages[page].setFooter(`Página ${page + 1} / ${pages.length}`));
      });
      reactionCollector.on('end', () => curPage.reactions.removeAll());
      return curPage;

  } else {

    throw new Error('Type invalido!')

  }
}