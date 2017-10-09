(()=> {

	const getAlbums = (amount) => {
		const root = 'https://jsonplaceholder.typicode.com';

		$.ajax({
			  method: 'GET',
			  url: `${root}/albums`, // (root + '/albums')
			  success: albums => {
				  albums.forEach((album, index) => {
						if (index > amount ) {
							return false;
						} else {
							let albumPhotos = `${root}/albums/${index}/photos`;

							$.ajax({
							  method: 'GET',
							  url: albumPhotos,
							  success: photos => {
								  photos.forEach((photo, index) => {
										if (index >= 1 ) {
											return false;
										}
										return $('[data-albums]').append(`<img src=${photo.url} alt=${photo.title} />`);
								  });
								}
							});		
						}						
				  });
				}
		});	
	}

	const init = () => {
		getAlbums(5);
	}

	$(document).ready(init);
	
})();