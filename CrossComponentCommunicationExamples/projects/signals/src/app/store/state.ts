import { WritableSignal, signal } from "@angular/core";
import { Animal } from "../models/animal.model";

export const selectedAnimal: WritableSignal<Animal | undefined> = signal(undefined);
