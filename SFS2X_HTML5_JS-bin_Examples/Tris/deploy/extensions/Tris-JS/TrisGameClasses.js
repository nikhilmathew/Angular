

// --- Tile Enum ---------------------------------

Tile = {
	EMPTY:0,
	GREEN:1,
	RED:2
}

// --- GameState Enum -----------------------------

GameState = {
	RUNNING:0,
	END_WITH_WINNER:1,
	END_WITH_TIE:2
}

// --- LastGameEndResponse Class ------------------

LastGameEndResponse = function(cmd, params)
{
	this.cmd = cmd;
	this.params = params;
}

// --- TrisGameBoard Class ------------------------

TrisGameBoard = function()
{
	this.BOARD_SIZE = 4;
	this.board = this._initGameBoard(this.BOARD_SIZE, this.BOARD_SIZE);
	this.winner = 0;
	this.reset();
}

TrisGameBoard.prototype._initGameBoard = function(rows, cols)
{
	var arr = [];
	
	for (var r = 0; r < rows; r++)
		arr[r] = [];
		
	return arr;
}

TrisGameBoard.prototype.getTileAt = function(x, y)
{
	return this.board[y][x];
}

TrisGameBoard.prototype.setTileAt = function(x, y, tile)
{
	this._checkCoords(x, y);
	this.board[y][x] = tile;
}

TrisGameBoard.prototype.getWinner = function()
{
	return this.winner;
}

TrisGameBoard.prototype.getGameStatus = function(moveCount)
{
	var state = GameState.RUNNING;
	var allSolutions = this._getAllSolutions();
	
	for (var i = 0; i < allSolutions.length; i++)
	{
		var sol = allSolutions[i];

		// Player 1 wins
		if (sol == "111")
		{
			state = GameState.END_WITH_WINNER;
			this.winner = 1;
			break;
		}
		
		else if (sol == "222")
		{
			state = GameState.END_WITH_WINNER;
			this.winner = 2;
			break;
		}
	}
	
	if (this.winner == 0 && moveCount == 9)
		state = GameState.END_WITH_TIE;
	
	return state;
}

TrisGameBoard.prototype.reset = function()
{
	this.winner = 0;
	
	for (var y = 1; y < this.BOARD_SIZE; y++)
	{
		var boardRow = this.board[y];
		
		for (var x = 1; x < this.BOARD_SIZE; x++)
		{
			boardRow[x] = Tile.EMPTY;
		}
	}
}

//::: Private ::::::::::::::::::::::::::::::::::::::::::::::
TrisGameBoard.prototype._checkCoords = function(x, y)
{
	if (x < 1 || x > 3)
		throw ("Tile X position out of range: " + x);
	
	if (y < 1 || y > 3)
		throw ("Tile Y position out of range: " + x);
}

TrisGameBoard.prototype._getAllSolutions = function()
{
	var solutions = [];
	
	//--- All rows ------------------------------------------------
	for (var y = 1; y <= 3; y++)
	{
		solutions.push
		(
			"" + this.board[y][1] + this.board[y][2] + this.board[y][3]
		)
	}

	//--- All cols ------------------------------------------------
	for (var x = 1; x <= 3; x++)
	{
		solutions.push
		(
			"" + this.board[1][x] + this.board[2][x] + this.board[3][x]
		)
	}	
	
	//--- All diagonals ------------------------------------------
	solutions.push
	(
		"" + this.board[1][1] + this.board[2][2] + this.board[3][3]
	)
	
	solutions.push
	(
		"" + this.board[1][3] + this.board[2][2] + this.board[3][1]
	)
	
	return solutions;
}

TrisGameBoard.prototype._toSFSArray = function()
{
	var sfsa = new SFSArray();
	
	for (var y = 1; y <= 3; y++)
	{
		var row = [];
		
		for (var x = 1; x <= 3; x++)
			row.push( this.board[y][x] );
		
		sfsa.addIntArray(asJavaList(row));
	}
	
	return sfsa;
}
