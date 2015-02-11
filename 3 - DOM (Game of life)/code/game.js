window.addEventListener('DOMContentLoaded', function () {
	//When the page structure is loaded...

	var ROWS = 90, COLS = 90,
		cellProto,
		getLiveNeighbours,
		nextCycle,
		createCanvas,
		createCell,
		init,
		appendListeners,
		isPending = false,
		cycleTimeout,
		cells;

	cellProto = {

	};

	appendListeners = function (container, startBtn, stopBtn, clearBtn) {

	};

	init = function (xRows, yRows) {
		var container = document.querySelector('#game-canvas');
		cells = createCanvas(container, xRows, yRows).map(createCell);
		appendListeners(
			container,
			document.querySelector('.start'),
			document.querySelector('.stop'),
			document.querySelector('.clear')
		);
	};

	createCanvas = function (container, rows, colls) {

	};

	createCell = function (domEl) {

	};

	getLiveNeighbours = function (index, cells) {
		return [
			index - 1,
			index + 1,
			index - COLS - 1,
			index - COLS,
			index - COLS + 1,
			index + COLS - 1,
			index + COLS,
			index + COLS + 1,
		].filter(function (cellInd) {
			return cellInd >= 0 && cellInd < COLS * ROWS;
		}).reduce(function (preValue, cellInd) {
			return preValue + (cells[cellInd].isAlive() ? 1 : 0);
		}, 0);
	};

	nextCycle = function (cells) {
		cycleTimeout = window.setTimeout(function () {
			cells.map(function (cell, index) {
				return getLiveNeighbours(index, cells);
			}).forEach(function (neighbours, index) {
				if (cells[index].isAlive()) {
					if (neighbours < 2 || neighbours > 3) {
						cells[index].die();
					}
				} else if (neighbours === 3) {
					cells[index].live();
				}
			});

			nextCycle(cells);
		}, 150);
	};

	init(ROWS, COLS);

});
