type MyExample = {
    name: string
    age: number
    surname: string
  }
 
    type MyExample2 = Partial<MyExample>
    // makes the variable optional

    type MyExample3 = Omit<MyExample, 'name'|'surname'>
    //removes variables. Not optional

    type arr = { name: string }[]
    //object array. object has rule
    const myArr: arr = []
    //usage

    interface IOption<T, K, Y> {
        displayName: T
        value: K
        content: Y
      }

      // i can use different data types

      //const selectedObj: ComputedRef<IOption < string, string, number>> = {}