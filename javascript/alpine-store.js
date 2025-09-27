document.addEventListener('alpine:init', () => {
	Alpine.store('jsScroll', {
		on: false,

		initScroll(el) {
			var demo = new LetMeScroll({
				selector: "#" + el.dataset.id,
				config: {
					dimensions: {
						width: "auto",
						height: "180px"
					},
					scroll: {
						bottomOffset: 0,
						autoHide: true
					}
				},

				onMove: function () {
					demo.refresh();
				}
			});
		},

		open() {
			this.on = true;
		},

		toggle() {
			this.on = !this.on
		}
	});

	const allCerts = document.querySelectorAll('#certificatesCarouselDesktop img, #certificatesCarouselMobile img');
	allCerts.forEach((img, index) => {
		img.addEventListener('click', () => {
			const modalCarousel = document.querySelector('#certCarouselModal');
			const carouselInstance = bootstrap.Carousel.getOrCreateInstance(modalCarousel);
			carouselInstance.to(index);
			const certModal = new bootstrap.Modal(document.getElementById('certModal'));
			certModal.show();
		});
	});



	Alpine.store('chooseCity', {
		on: false,

		open() {
			this.on = true;
		},

		close() {
			this.on = false;
		},

		toggle() {
			this.on = !this.on
		}
	});


	Alpine.store('openFilter', {
		on: false,

		open() {
			this.on = true;
		},

		close() {
			this.on = false;
		},

		toggle() {
			this.on = !this.on
		}
	});
})