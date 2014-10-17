var ledCanvas = {
	meta: {
		monospaced: false,
		charWidth: 7,
		//charSpacing: 2,
		lineHeight: 10
	},
	chars: {
		':': {
			data: [
				[0, 3],

				[0, 6]],
			width: 1
		},
		' ': {
			data: [],
			width: 1
		},
		0: {
			data: [
				[0, 0], [1, 0], [2, 0], [3, 0], [4, 0],
				[0, 1],                         [4, 1],
				[0, 2],                         [4, 2],
				[0, 3],                         [4, 3],
				[0, 4],                         [4, 4],
				[0, 5],                         [4, 5],
				[0, 6],                         [4, 6],
				[0, 7],                         [4, 7],
				[0, 8],                         [4, 8],
				[0, 9],                         [4, 9],
				[0,10], [1,10],[2,10],[3, 10], [4, 10],
			],
			width: 6
		},
		1: {
			data: [
				[0, 0],
				[0, 1],
				[0, 2],
				[0, 3],
				[0, 4],
				[0, 5],
				[0, 6],
				[0, 7],
				[0, 8],
				[0, 9],
				[0, 10]
			],
			width: 1
		},
		2: {
			data: [
				[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
				                                        [5, 1],
				                                        [5, 2],
				                                        [5, 3],
				                                        [5, 4],
				[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5],
				[0, 6],
				[0, 7],
				[0, 8],
				[0, 9],
				[0,10],[1, 10],[2, 10],[3, 10],[4, 10],[5, 10]
			],
			width: 6
		},
		3: {
			data: [
				[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
				                                        [5, 1],
				                                        [5, 2],
				                                        [5, 3],
				                                        [5, 4],
				[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5],
				                                        [5, 6],
				                                        [5, 7],
				                                        [5, 8],
				                                        [5, 9],
				[0,10],[1, 10],[2, 10],[3, 10],[4, 10],[5, 10]
			],
			width: 6
		},
		4: {
			data: [
				[0, 0],                                 [5, 0],
				[0, 1],                                 [5, 1],
				[0, 2],                                 [5, 2],
				[0, 3],                                 [5, 3],
				[0, 4],                                 [5, 4],
				[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5],
				                                        [5, 6],
				                                        [5, 7],
				                                        [5, 8],
				                                        [5, 9],
				                                        [5, 10],
			],
			width: 6
		},
		5: {
			data: [
				[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
				[0, 1],
				[0, 2],
				[0, 3],
				[0, 4],
				[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5],
				                                        [5, 6],
				                                        [5, 7],
				                                        [5, 8],
				                                        [5, 9],
				[0,10],[1,10],[2, 10],[3, 10],[4, 10], [5, 10]
			],
			width: 6
		},
		6: {
			data: [
				[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
				[0, 1],
				[0, 2],
				[0, 3],
				[0, 4],
				[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5],
				[0, 6],                                  [5, 6],
				[0, 7],                                  [5, 7],
				[0, 8],                                  [5, 8],
				[0, 9],                                  [5, 9],
				[0,10],[1, 10],[2, 10],[3, 10],[4, 10], [5, 10]
			],
			width: 6
		},
		7: {
			data: [
				[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
				                                        [5, 1],
				                                        [5, 2],
				                                        [5, 3],
				                                        [5, 4],
				                                        [5, 5],
				                                        [5, 6],
				                                        [5, 7],
				                                        [5, 8],
				                                        [5, 9],
				                                        [5, 10]
			],
			width: 6
		},
		8: {
			data: [
				[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
				[0, 1],                                 [5, 1],
				[0, 2],                                 [5, 2],
				[0, 3],                                 [5, 3],
				[0, 4],                                 [5, 4],
				[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5],
				[0, 6],                                 [5, 6],
				[0, 7],                                 [5, 7],
				[0, 8],                                 [5, 8],
				[0, 9],                                 [5, 9],
				[0,10],[1, 10],[2, 10],[3, 10],[4, 10], [5, 10]
			],
			width: 6
		},
		9: {
			data: [
				[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0],
				[0, 1],                                 [5, 1],
				[0, 2],                                 [5, 2],
				[0, 3],                                 [5, 3],
				[0, 4],                                 [5, 4],
				[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5],
				                                        [5, 6],
				                                        [5, 7],
				                                        [5, 8],
				                                        [5, 9],
				                                        [5, 10]
			],
			width: 6
		}
	}
};

module.exports = ledCanvas;