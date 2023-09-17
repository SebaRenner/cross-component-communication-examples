import { createAction, props } from "@ngrx/store";
import { Animal } from "../../model/animal.model";

export const setAnimal = createAction('[Animal] set', props<{ animal: Animal }>());

export const resetAnimal = createAction('[Animal] reset');
