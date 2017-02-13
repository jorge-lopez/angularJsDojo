angular.module('index',[
	]).controller('MainCtrl', function($scope)
	{
		$scope.hello = "";
		$scope.Genres = [
		{"id": 1, "name": "Action"},
		{"id": 2, "name": "Drama"},
		{"id": 3, "name": "Historical"},
		{"id": 4, "name": "Mecha"},
		{"id": 5, "name": "School Life"},
		{"id": 6, "name": "Shounen"},
		{"id": 7, "name": "Supernatural"},
		{"id": 8, "name": "Adult"},
		{"id": 9, "name": "Ecchi"},
		{"id": 10, "name": "Horror"},
		{"id": 11, "name": "Mystery"},
		{"id": 12, "name": "Sci-fi"},
		{"id": 13, "name": "Shounen Ai"},
		{"id": 14, "name": "Tragedy"},
		{"id": 15, "name": "Adventure"},
		{"id": 16, "name": "Fantasy"},
		{"id": 17, "name": "Josei"},
		{"id": 18, "name": "One Shot"},
		{"id": 19, "name": "Seinen"},
		{"id": 20, "name": "Slice of Life"},
		{"id": 21, "name": "Webtoons"},
		{"id": 22, "name": "Comedy"},
		{"id": 23, "name": "Gender Bender"},
		{"id": 24, "name": "Martial Arts"},
		{"id": 25, "name": "Psychological"},
		{"id": 26, "name": "Shoujo"},
		{"id": 27, "name": "Smut"},
		{"id": 28, "name": "Yaoi"},
		{"id": 29, "name": "Doujinshi"},
		{"id": 30, "name": "Harem"},
		{"id": 31, "name": "Matur	e"},
		{"id": 32, "name": "Romance"},
		{"id": 33, "name": "Shoujo Ai"},
		{"id": 34, "name": "Sports"},
		{"id": 35, "name": "Yuri"}
		];

		$scope.Mangas = [
	    {"id": 1, "title": "One Piece", "Genres": [1,6,15,16,22], "GenresN": []},
		{"id": 2, "title": "20th Century Boys","Genres": [2,11,19], "GenresN": []},
		{"id": 3, "title": "Gantz","Genres": [1,2,4,6,7,8,11,12,19], "GenresN": []},
		{"id": 4, "title": "Hajime No Ippo","Genres": [1,6,20,24,34], "GenresN": []},
		{"id": 5, "title": "Bleach","Genres": [1,6,7,15,20], "GenresN": []},
		{"id": 6, "title": "Full Metal Alchemist","Genres": [1,2,6,15], "GenresN": []},
		{"id": 7, "title": "Monster","Genres": [2,11,19,25], "GenresN": []},
		{"id": 8, "title": "Holy Land","Genres": [1,2,5,24,25], "GenresN": []},
		{"id": 9, "title": "No Longer Human","Genres": [2,8,14,19,25], "GenresN": []},
		{"id": 10, "title": "The Gamer","Genres": [1,5,6,7,15,20,21,22], "GenresN": []},
		{"id": 11, "title": "Tower of God","Genres": [1,2,6,7,15,21,22], "GenresN": []}
		];

		function getGenreNameById(GenreId)
		{
			for(var i=0;i<($scope.Genres.length);i++)
			{
				if($scope.Genres[i].id===GenreId)
					return $scope.Genres[i].name;
			}
			return "";
			//return "YOLOSWAG";
		}

		//Set Genre Name to the array for each genre for each manga, to filter later
		for(var i = 0; i<($scope.Mangas.length);i++)
		{
			for(var j = 0; j<($scope.Mangas[i].Genres.length);j++)
			{
				$scope.Mangas[i].GenresN.push(getGenreNameById($scope.Mangas[i].Genres[j]));
			}
		}
		/*var auxM;
		var auxG;
		for(auxM in $scope.Mangas)
		{
			for(auxG in $scope.Mangas[i].Genres)
			{
				auxM.GenresN.push(getGenreNameById(auxG));
			}
		}*/

		$scope.getGenreNameById = getGenreNameById;

		$scope.CurrentGenre = null;
		$scope.AllManga = "[";

		function setCurrentGenre(Genre)
		{
			$scope.CurrentGenre = Genre;
		}

		$scope.setCurrentGenre = setCurrentGenre;

		$scope.isCreating = false;
		$scope.isEditing = true;

		$scope.CurrentIdMangaEditing = 0;

		function startCreating()
		{
			$scope.isCreating = true;
			$scope.isEditing = false;
		}

		function cancelCreating()
		{
			$scope.isCreating = false;
		}

		function startEditing(id)
		{
			$scope.isCreating = false;
			$scope.isEditing = true;
			$scope.CurrentIdMangaEditing = id;
		}

		function cancelEditing()
		{
			$scope.isEditing = false;
		}

		function isEditingManga(id){
			return $scope.isEditing&&$scope.CurrentIdMangaEditing===id;
		}

		function isCreatingManga(){
			return $scope.isCreating;
		}

		function DeleteMangaGenreByMangaByGenreId(Manga,GenreId)
		{
			/*
			for(var i=0;i<$scope.Mangas.length;i++)
			{
				if($scope.Mangas[i].id===Manga.id)
				{
					$scope.Mangas[i].Genres.splice($scope.Mangas[i].Genres.indexOf(GenreId),1);
					$scope.Mangas[i].GenresN.splice($scope.Mangas[i].GenresN.indexOf(getGenreNameById(GenreId)),1);
					break;
				}
			}*/

			var index = _.findIndex($scope.Mangas,
			function(m)
			{
				return m.id===Manga.id;
			});

			_.remove($scope.Mangas[index].Genres,
			function(g)
			{
				return g===GenreId;
			});

		}

		function AddMangaGenreByMangaByGenreId(Manga,GenreId)
		{
			for(var i=0;i<$scope.Mangas.length;i++)
			{
				if($scope.Mangas[i].id===Manga.id)
				{
					$scope.Mangas[i].Genres.push(GenreId);
					$scope.Mangas[i].GenresN.push(getGenreNameById(GenreId));
					break;
				}
			}
		}

		function GenresToBeAddedByManga(Manga)
		{
			var Res = [];
			for(var i=0;i<$scope.Genres.length;i++)
			{
				if(!isGenreInMangaGenre(Manga,$scope.Genres[i].id))
					Res.push($scope.Genres[i])
			}

			return Res;
		}

		function isGenreInMangaGenre(Manga,GenreId)
		{
			var res = false;
			for(genre of Manga.Genres)
			{
				if(GenreId===genre)
				res = true;
			}
			return res;
		}

		function GetLastMangaId()
		{
			var res = 0;
			for(manga of $scope.Mangas)
			{
				if(res < manga.id)
					res = manga.id;
			}
			return res;
		}
		/*
		function AddMangaByTitle(MangaTittle)
		{
			 $scope.Mangas.push({"id": GetLastMangaId()+1, "title": MangaTittle, "Genres": [], "GenresN": []});
		}
		*/

		function AddMangaByTitle(Manga)
		{
			 $scope.Mangas.push({"id": GetLastMangaId()+1, "title": Manga.title, "Genres": [], "GenresN": []});
			 if($scope.CurrentGenre !== null)
			 {
			 	$scope.Mangas[$scope.Mangas.length-1].Genres.push($scope.CurrentGenre.id);
				$scope.Mangas[$scope.Mangas.length-1].GenresN.push($scope.CurrentGenre.name);
			 }
			 //$scope.isCreating = false;
		}
		/* the ._ stands for the instance of the lodash library class*/
		function DeleteMangaById(MangaId)
		{
			/*
			for(var i=0;i<$scope.Mangas.length;i++)
			{
				if($scope.Mangas[i].id===MangaId)
				{
					$scope.Mangas.splice(i,1);
					break;
				}
			}*/

			var index = _.findIndex($scope.Mangas,
			function(m)
			{
				return m.id===MangaId;
			});

			$scope.Mangas.splice(index,1);
		}

		/*
		$scope.editedManga = null;
		function SetEditedManga(manga)
		{
			$scope.editedManga = angular.copy(manga);
		}
		
		*/
		
		/*You have to set it to an scope variable to be able to access the funtion in the View*/
		$scope.startCreating = startCreating;
		$scope.cancelCreating = cancelCreating;
		$scope.startEditing = startEditing;
		$scope.cancelEditing = cancelEditing;
		$scope.isEditingManga = isEditingManga;
		$scope.isCreatingManga = isCreatingManga;
		$scope.DeleteMangaGenreByMangaByGenreId = DeleteMangaGenreByMangaByGenreId;
		$scope.AddMangaGenreByMangaByGenreId = AddMangaGenreByMangaByGenreId;
		$scope.GenresToBeAddedByManga = GenresToBeAddedByManga;
		$scope.AddMangaByTitle = AddMangaByTitle;
		$scope.DeleteMangaById = DeleteMangaById;


	})
;
















