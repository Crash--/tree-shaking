// => 980b
//import { models } from './models/exportall'
//console.log(models.baz.foo)

// => 3.X Kb
//import {baz} from './models/index'
//console.log(baz.foo)

// => 970b
import * as a from './models'
console.log(a.foo)