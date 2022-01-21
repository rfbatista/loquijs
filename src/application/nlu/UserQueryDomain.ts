/**
 *  Query is a component that group slots together
 * matching a query is to find a set of entities
 * and build a questions to find the slots if needed
 *  */

export type QueryDomain = {
  id: string;
  name: string;
  slots: Slot[];
};

export type Slot = {
	id: string;
	name: string;
	entity: any;
	confirmationPrompts: any[];
	elicitPrompts: any[];
};
