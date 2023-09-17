import { Action, createReducer, on } from "@ngrx/store"
import { setAnimal, resetAnimal } from "./animal.actions"
import { Animal } from "../../model/animal.model"

export interface AnimalState {
  selectedAnimal?: Animal;
}

export const initialAnimalState: AnimalState = {}

export const animalReducer = createReducer<AnimalState, Action>(
  initialAnimalState,
  on(setAnimal, (state, { animal }) => ({ ...state, animal })),
  on(resetAnimal, (state) => ({ ...state, undefined })
));
