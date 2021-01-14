$(document).ready(function() {
		$('#material-tabs').each(function() {

				var $active, $content, $links = $(this).find('a');

				$active = $($links[0]);
				$active.addClass('active');

				$content = $($active[0].hash);

				$links.not($active).each(function() {
						$(this.hash).hide();
				});

				$(this).on('click', 'a', function(e) {

						$active.removeClass('active');
						$content.hide();

						$active = $(this);
						$content = $(this.hash);

						$active.addClass('active');
						$content.show();

						e.preventDefault();
				});
		});
});

$(document).ready(function() {
	$('#material-tabs1').each(function() {

			var $active, $content, $links = $(this).find('a');

			$active = $($links[0]);
			$active.addClass('active');

			$content = $($active[0].hash);

			$links.not($active).each(function() {
					$(this.hash).hide();
			});

			$(this).on('click', 'a', function(e) {

					$active.removeClass('active');
					$content.hide();

					$active = $(this);
					$content = $(this.hash);

					$active.addClass('active');
					$content.show();

					e.preventDefault();
			});
	});
});