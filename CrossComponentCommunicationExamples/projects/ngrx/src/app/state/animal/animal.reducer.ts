import { Action, createReducer, on } from "@ngrx/store"
import { setAnimal, resetAnimal } from "./animal.actions"
import { Animal } from "../../models/animal.model"

export interface AnimalState {
  selectedAnimal?: Animal;
}

export const initialAnimalState: AnimalState = {
  selectedAnimal: undefined
}

export const animalReducer = createReducer<AnimalState, Action>(
  initialAnimalState,
  on(setAnimal, (state, { animal }) => ({ selectedAnimal: animal })),
  on(resetAnimal, (state) => ({ selectedAnimal: undefined })
));
