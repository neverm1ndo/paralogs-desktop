export class Line {
  constructor(
    public date: string,
    public process: string,
    public player: {
      nickname: string,
      motion: any,
      geo: any
    }
  ) {}
}

export class Processes {
  static connection: any = {
      connect: '<connection/connect>',
      disconnect: {
        quit: '<connection/disconnect/quit>',
        ban: '<connection/disconnect/ban>',
        kick: '<connection/disconnect/kick>',
        rconkickban: '<connection/disconnect/rconkickban>'
      }
    };
  static auth: any = {
    first_spawn: {
      allow: '<auth/first_spawn/allow>'
    },
    ok: '<auth/ok>'
  };
  static spectate: any = {
    start: '<spectate/start>',
    change: '<spectate/change>',
    stop: '<spectate/stop>',
    spawn: '<spectate/spawn>'
  };
  static check: any = {
    explode: {
      vehicle: '<check/explode/vehicle>',
      player: '<check/explode/player>'
    },
    silent: {
      vehicle: '<check/silent/vehicle>',
      player: '<check/silent/player>'
    }
  };
  static player_info: any = {
    on: {
      id: '<player_info/on/id>'
    }
  };
  static ban: any = {
    unbanip: {
      hand: '<ban/unbanip/hand>'
    }
  };
  static serial: any = {
    ban: {
      auto: '<serial/ban/auto>'
    }
  };
  static free_for_all: any = {
    spawn: '<free_for_all/spawn>'
  };
  static cmd: any = {
    pre_process: '<cmd/pre_process>',
    ok: '<cmd/ok>',
    error: {
      syntax:'<cmd/error/syntax>',
      process:'<cmd/error/process>'
    },
    pre_error: {
      antiflood: '<cmd/pre_error/antiflood>'
    }
  };
  static player_color: any = {
    init: '<player_color/init>',
    set: '<player_color/set>',
  };
  static weapons: any = {
    buy: '<weapons/buy>'
  };
  static chat: any = {
    msg: '<chat/msg>',
    pm: '<chat/pm>',
    group: '<chat/group>',
    admin_chat: '<chat/admin_chat>',
    report: '<chat/report>',
    close: '<chat/close>'
  };
  static health: any = {
    killed: '<health/killed>',
    suicided: '<health/suicided>'
  };
  static sleep: any = {
    enter: '<sleep/enter>',
    leave: {
      game: '<sleep/leave/game>',
      exit: '<sleep/leave/exit>'
    }
  };
  static acheat: any = {
    block: {
      weapon: {
        id: '<acheat/block/weapon/id>'
      },
      money: {
        max: '<acheat/block/money/max>'
      }
    }
  };
  static automute: any = {
    dictionary: {
      mute: '<automute/dictionary/mute>',
      no_mute: '<automute/dictionary/no_mute>'
    },
    meaningless: {
      no_mute: '<automute/meaningless/no_mute>',
      mute: '<automute/meaningless/mute>'
    }
  };
  static mute: any = {
    on: {
      hand: '<mute/on/hand>'
    }
  };
}
