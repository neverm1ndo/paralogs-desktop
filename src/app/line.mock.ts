export class Line {
  constructor(
    public date: string,
    public process: string,
    public player: {
      nickname: string,
      motion: string,
      geo: Array<string>
    }
  ) {}
}
