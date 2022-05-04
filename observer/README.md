## The Observer Pattern 


__The challenge__ is to write an app that creates different users. The app can create different themes and subscribe the users to them. When a user adds a message to a theme, an alert is sent to the console. All the users subscribed to the theme are displayed on the console (receive the message). Create a theme with a user y another one with two and show the reception of the messages of the users. Use module events



Observer is a __behavioral__ pattern.
This means that is concerned about __communication between objects__.

The pattern takes care of the communication between a __Subject__ (Observable / objects with methods) and multiple __observers__. The subject target is to notify observers the state changes. Observers can __subscribe__ to the subject to keep track of any change of state of the subject. Observers can __unsubscribe__ as well, stopping to watch the subject.

In Node.js the Observer Pattern is available through __EventEmitter__ class.
EventEmitter allows to register functions as listeners, that will be called when an specific event is fired.

The EventEmitter class is defined and exposed by the events module.

Some methods available:
Observable: eventName 
Observers: listener. 

```
on(eventName:string, listener: Function):
```

Adds the listener function to the end of the listeners array for the event named eventName.
No checks are made to see if the listener has already been added. 
Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

```
once(eventName:string, listener: Function) 
```
Adds a one-time listener function for the event named eventName. The next time eventName is triggered, this listener is removed and then invoked.

```
emit(eventName:string, [...args])
```
Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

```
removeListener(eventName:string, listener: Function)
```
Removes the specified listener from the listener array for the event named eventName.

Creating an observable directly from EventEmitter class is not flexible enough when we need something beyond creating new events. A generic object observable is the solution most times. That can be achieved extending the class EventEmitter.








source: https://itnext.io/the-observer-pattern-in-nodejs-c0cfffb4744a
