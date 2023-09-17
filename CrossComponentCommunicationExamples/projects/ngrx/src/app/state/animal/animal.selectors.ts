import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AnimalState } from "./animal.reducer";

export const selectAnimalState = createFeatureSelector<AnimalState>('animal');

export const selectAnimal = createSelector(selectAnimalState, (state) => state.selectedAnimal);
