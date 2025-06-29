import { describe, it, assert } from 'vitest'
import { AddNoteAction, MusicTemplate } from '../types/templates'
import { sheetMusicReducer } from '../hooks/useSheetMusic'
import { Eighth, EighthRest, Quarter } from '../components/sheet_music/notes'

const prevMusic: MusicTemplate = {
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
				new Eighth('C', 5, false),
				new Eighth('D', 5, false),
				new Eighth('E', 5, false),
				new Eighth('F', 5, false),
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
		const music = sheetMusicReducer(prevMusic, action)

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
						new Eighth('C', 5, false),
						new Eighth('D', 5, false),
					],
				},
				{
					notes: [
						new Eighth('E', 5, false),
						new Eighth('F', 5, false),
						new Eighth('C', 5, false),
						new Eighth('D', 5, false),
					]
				},
			],
		}
		
		assert.deepEqual(music, expectedMusic)
	})
})

