import svg4everybody from 'svg4everybody';
import typish from 'typish';
import $ from 'jquery';

$(() => {
	svg4everybody();

	const $typed = $('.js-typed');
	const hidden = 'hidden';
	const typeSpeed = 80;

	function typeLinks() {
		const
			$typed2 = $('.js-typed-2');

		function link(href) {
			return '<a href=' + href + ' class="link comming-soon__link">';
		}

		$typed2.removeClass(hidden);

		typish($typed2)
			.speed(typeSpeed)
			.type('ВК', link('http://vk.com/steklofusing'))
			.type('Одноклассники', link('https://ok.ru/juicytime'))
			.type('Инстаграм', link('https://www.instagram.com/steklo.fusing/'))
			.wait(50);
	}

	typish($typed)
		.speed(typeSpeed)
		.type('Здесь скоро будет наш ')
		.type('веб-сайт', '<nobr>')
		.type(', а пока вы можете узнать о нас \n')
		.type('в соц-сетях', '<nobr>')
		.type('\n И полюбоваться на котика :)')
		.then(function () { typeLinks(); });


});

