import { BotType } from './BotRegistry/Bot';

export interface CreateBotPort {
  execute(bot: BotType): Promise<BotType>;
}

export interface CreateDialogPort {
	execute(dialog): Promise<any>;
}