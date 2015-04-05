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
		isAlive: function () {
			return this.alive;
		},
		live: function () {
			this.alive = true;
			this.dom.classList.add('alive');
		},
		die: function () {
			this.alive = false;
			this.dom.classList.remove('alive');
		}
	};

	appendListeners = function (container, startBtn, stopBtn, clearBtn) {
		container.addEventListener('click', function (e) {
			var cell, clickedCellElement = e.target;
			if (isPending) {
				return;
			}
			if (clickedCellElement.classList.contains('cell')) {
				cell = cells[clickedCellElement.dataset.index];
				if (cell.isAlive()) {
					cell.die();
				} else {
					cell.live();
				}
			}
		});

		startBtn.addEventListener('click', function (e) {
			nextCycle(cells);
			isPending = true;
		});

		stopBtn.addEventListener('click', function () {
			window.clearTimeout(cycleTimeout);
			isPending = false;
		});
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
		var i, a, cellEl,
			fakeElement = document.createDocumentFragment(),
			baseCellEl = document.createElement('div'), elements = [];

		baseCellEl.classList.add('cell');

		for (i = 0; i < rows; i++) {
			for (a = 0; a < colls; a++) {
				cellEl = baseCellEl.cloneNode(true);
				cellEl.style.top = (i * 10) + 'px';
				cellEl.style.left = (a * 10) + 'px';
				cellEl.setAttribute('data-index', a + (rows * i));

				elements.push(cellEl);
				fakeElement.appendChild(cellEl);
			}
		}

		container.appendChild(fakeElement);
		return elements;
	};

	createCell = function (domEl) {
		var cell = Object.create(cellProto);
		cell.alive = false;
		cell.dom = domEl;
		return cell;
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
