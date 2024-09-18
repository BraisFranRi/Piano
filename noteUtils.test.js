import getNoteFromKey from './noteUtils'
import {test, expect} from 'vitest'

//- e2e
//- unitarios

test('Si le paso la letra a me devolverá C4',()=>{
    let note = getNoteFromKey('a')
    expect(note).toBe('C4')
})

test('Si le paso la letra A me devolverá C4',()=>{
    let note = getNoteFromKey('A')
    expect(note).toBe('C4')
})

test('Si no le paso letra me devolverá undefined',()=>{
    let note = getNoteFromKey(null)
    expect(note).toBeUndefined()
})

test('Si no le paso letra me devolverá undefined',()=>{
    let note = getNoteFromKey()
    expect(note).toBeUndefined()
})

test('Si no le paso letra me devolverá undefined',()=>{
    let note = getNoteFromKey(undefined)
    expect(note).toBeUndefined()
})