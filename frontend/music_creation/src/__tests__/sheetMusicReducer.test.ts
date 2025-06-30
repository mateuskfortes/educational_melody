import { describe, it, assert } from 'vitest'
import { AddNoteAction, MusicTemplate } from '../types/templates'
import { sheetMusicReducer } from '../hooks/useSheetMusic'
import { Eighth, EighthRest, Half, HalfRest, Quarter, QuarterRest } from '../components/sheet_music/notes'

const prevMusic1: MusicTemplate = {
	meter: {
		top: 2,
		bottom: 4,
	},
	bpm: 120,
	measures: [
		{
			notes: [
				new Eighth('C', 5, false),
				new Quarter('D', 5, false),
				new Eighth('E', 5, false),
			],
		},
		{
			notes: [
				new HalfRest(),
			],
		},
		{
			notes: [
				new Eighth('C', 5, false),
				new Quarter('D', 5, false),
				new EighthRest(),
			],
		}
	],
}
const prevMusic2: MusicTemplate = {
	meter: {
		top: 2,
		bottom: 4,
	},
	bpm: 120,
	measures: [
		{
			notes: [
				new Eighth('C', 5, false),
				new Quarter('D', 5, false),
				new Eighth('E', 5, false),
			],
		},
		{
			notes: [
				new Half('F', 5, false),
			]
		}
	],
}
describe('useSheetMusic hook', () => {
	it('Should add a note to the music', () => {
		const action: AddNoteAction = {
			type: 'ADD_NOTE',
			payload: {
				note: new Quarter('G', 5, false),
				measureIndex: 0,
				noteIndex: 1,
			}
		}
		const music = sheetMusicReducer(prevMusic1, action)

		const expectedMusic: MusicTemplate = {
			meter: {
				top: 2,
				bottom: 4,
			},
			bpm: 120,
			measures: [
				{
					notes: [
						new Eighth('C', 5, false),
						new Quarter('G', 5, false),
						new Eighth('D', 5, false),
					],
				},
				{
					notes: [
						new EighthRest(),
						new Eighth('E', 5, false),
						new QuarterRest(),
					],
				},
				{
					notes: [
						new QuarterRest(),
						new Eighth('C', 5, false),
						new Eighth('D', 5, false),
					]
				},
			],
		}

		assert.deepEqual(music, expectedMusic)
	})
	it('Should add a note and split a note in at least one note with dot', () => {
		const action: AddNoteAction = {
			type: 'ADD_NOTE',
			payload: {
				note: new Eighth('G', 5, false),
				measureIndex: 0,
				noteIndex: 1,
			}
		}
		
		const music = sheetMusicReducer(prevMusic2, action)
		
		const expectedMusic: MusicTemplate = {
			meter: {
				top: 2,
				bottom: 4,
			},
			bpm: 120,
			measures: [
				{
					notes: [
						new Eighth('C', 5, false),
						new Eighth('G', 5, false),
						new Quarter('D', 5, false),
					],
				},
				{
					notes: [
						new Eighth('E', 5, false),
						new Quarter('F', 5, false, 1),
					]
				},
			],
		}

		assert.deepEqual(music, expectedMusic)
	})
})

