# Cross Component Communication Examples

Data Binding is a key concept in Angular that enables parent components to pass on data to child components via `@Input()` and gives child components the opportunity to push changes to their parent component with `@Output()`.
But what if two components need to communicate with each other who don't have a parent-child relationship?

// TODO: add illustration

Angular offers different options on how this can be achieved.

## Options
1. [Services](/CrossComponentCommunicationExamples/projects/services)
2. Signals
3. NgRx
4. Data Binding via common parent*

\* Whilst it is possible to handle cross component communication via a common parent component I would only recommend it if the components share the same direct parent. Depending on your component hierarchy the shared parent component might be 4 levels up, which means you'd have to pass the data through all levels to enable communication.  