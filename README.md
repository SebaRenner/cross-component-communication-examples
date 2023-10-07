# Cross Component Communication Examples

Data Binding is a key concept in Angular that enables parent components to pass on data to child components via `@Input()` and gives child components the opportunity to push changes to their parent component with `@Output()`.

![Parent child communication example](/.images/parent-child.drawio.png)

But what if two components need to communicate with each other who don't have a parent-child relationship?

![Cross component communication example](/.images/ccc.drawio.png)

Angular offers different ways on how this can be achieved.

## Options
1. [Services](/CrossComponentCommunicationExamples/projects/services)
2. [Signals](/CrossComponentCommunicationExamples/projects/signals)
3. [NgRx](/CrossComponentCommunicationExamples/projects/ngrx)
4. [Data Binding via common parent](/CrossComponentCommunicationExamples/projects/data-binding) *

\* Whilst it is possible to handle cross component communication via a common parent component I would only recommend it if the components share the same direct parent. Depending on your component hierarchy the shared parent component might be 4 levels up, which means you'd have to pass the data through all levels to enable communication between those components. 

## Application
The same mini application is implemented four times using different ways of cross component communication. An animal can be selected in the selection component (A). The selected animal is then displayed on the display component (B). On the display component the selection can also be reset.

![demo](/.images/application.gif)

