Key Points:

Memory Efficiency: When methods are defined on the prototype, they are shared among all instances, saving memory.
Performance: Shared methods on the prototype do not need to be recreated for each instance, leading to better performance.
Own Properties vs. Prototype Properties: The hasOwnProperty method checks if a property exists directly on the instance.
 Prototype properties will not show up as own properties, which is why bob.hasOwnProperty('greet') returns false.