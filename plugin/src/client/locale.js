/**
 * Chatbox Pet dictionaries — namespace `chatboxPet`.
 *
 * Bubble lines come from the pet pack itself (Pikachu voice, zh only); only
 * chrome strings live here. Both dictionaries carry exactly the same keys.
 */

export const NS = 'chatboxPet';

export const zh = {
  'label': '皮卡丘',
  'aria.pet': '皮卡丘工作伙伴，点击挥手',
  'aria.bubble': '工作状态提示',
  'sound.on': '音效开',
  'sound.off': '音效关',
  'settings.title': '输入框伴侣',
  'settings.desc': '两个功能各自独立，关掉一个不影响另一个。',
  'settings.pet': '皮卡丘',
  'settings.boost': '提示词增强',
  'settings.sound': '音效',
  'menu.title': '皮卡丘菜单',
  'menu.say': '让它说…',
  'menu.sayPlaceholder': '它会把这句话说出来',
  'menu.saySubmit': '说',
  'menu.action': '做个动作',
  'menu.hint': 'Esc 或点外面关闭',
  'menu.recent': '最近说过',
  'menu.quip': '聊点什么',
  'menu.clear': '清空',
  'aria.menu': '打开皮卡丘菜单',
  'merge.label': (n) => `合并 ${n} 条排队消息`,
  'merge.running': '正在合并…',
  'merge.done': (n) => `已把 ${n} 条合并成 1 条`,
  'merge.donePlain': (n) => `已合并 ${n} 条（未优化）`,
  'merge.failed': '合并未完成，请检查队列',
  'merge.changed': '队列已变化，请重新合并',
  'merge.claimed': '有消息已被智能体取走，请检查队列',
};

export const en = {
  'label': 'Pikachu',
  'aria.pet': 'Pikachu work companion; activate to wave',
  'aria.bubble': 'Work status hint',
  'sound.on': 'Sound on',
  'sound.off': 'Sound off',
  'settings.title': 'Composer companion',
  'settings.desc': 'Two independent features; switching one off leaves the other alone.',
  'settings.pet': 'Pikachu',
  'settings.boost': 'Prompt boost',
  'settings.sound': 'Sound',
  'menu.title': 'Pikachu menu',
  'menu.say': 'Make it say…',
  'menu.sayPlaceholder': 'It will say this line',
  'menu.saySubmit': 'Say',
  'menu.action': 'Do an action',
  'menu.hint': 'Esc or click outside to close',
  'menu.recent': 'Said before',
  'menu.quip': 'Small talk',
  'menu.clear': 'Clear',
  'aria.menu': 'Open the Pikachu menu',
  'merge.label': (n) => `Merge ${n} queued messages`,
  'merge.running': 'Merging…',
  'merge.done': (n) => `Merged ${n} into one`,
  'merge.donePlain': (n) => `Merged ${n} (not optimised)`,
  'merge.failed': 'Merge incomplete; check the queue',
  'merge.changed': 'The queue changed; merge again',
  'merge.claimed': 'The agent claimed a message; check the queue',
};
