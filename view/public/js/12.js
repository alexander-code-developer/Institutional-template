( function( $ ) {
    var WidgethfeSearchButton = function( $scope, $ ){

		if ( 'undefined' == typeof $scope )
			return;

			var $input = $scope.find( "input.hfe-search-form__input" );
			var $clear = $scope.find( "button#clear" );
			var $clear_with_button = $scope.find( "button#clear-with-button" );
			var $search_button = $scope.find( ".hfe-search-submit" );
			var $toggle_search = $scope.find( ".hfe-search-icon-toggle input" );

		$scope.find( '.hfe-search-icon-toggle' ).on( 'click', function( ){
			$scope.find( ".hfe-search-form__input" ).trigger( 'focus' );						
		});	
		
		$scope.find( ".hfe-search-form__input" ).on( 'focus', function(){
			$scope.find( ".hfe-search-button-wrapper" ).addClass( "hfe-input-focus" );
		});

		$scope.find( ".hfe-search-form__input" ).blur( function() {
			$scope.find( ".hfe-search-button-wrapper" ).removeClass( "hfe-input-focus" );
		});
  		   

		$search_button.on( 'touchstart click', function(){
			$input.submit();
		});

		$toggle_search.css( 'padding-right', $toggle_search.next().outerWidth() + 'px' );

	
		$input.on( 'keyup', function(){
			$clear.style = (this.value.length) ? $clear.css('visibility','visible'): $clear.css('visibility','hidden');
			$clear_with_button.style = (this.value.length) ? $clear_with_button.css('visibility','visible'): $clear_with_button.css('visibility','hidden');
			$clear_with_button.css( 'right', $search_button.outerWidth() + 'px' );
		});

		$clear.on("click",function(){
			this.style = $clear.css('visibility','hidden');
			$input.value = "";
		});
		$clear_with_button.on("click",function(){
			this.style = $clear_with_button.css('visibility','hidden');
			$input.value = "";
		});
		
	};
		/**
	 * Nav Menu handler Function.
	 *
	 */
	var WidgethfeNavMenuHandler = function( $scope, $ ) {

		if ( 'undefined' == typeof $scope )
			return;
		
		var id = $scope.data( 'id' );
		var wrapper = $scope.find('.elementor-widget-hfe-nav-menu ');		
		var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );
		var flyout_data = $( '.elementor-element-' + id + ' .hfe-flyout-wrapper' ).data( 'flyout-class' );
		var last_item = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'last-item' );
		var last_item_flyout = $( '.elementor-element-' + id + ' .hfe-flyout-wrapper' ).data( 'last-item' );

		var menu_items_links        = $( '.elementor-element-' + id + ' .hfe-nav-menu nav li a' );
		var menu_items_links_flyout = $( '.elementor-element-' + id + ' .hfe-flyout-wrapper li a' );
		if (menu_items_links.length > 0) {
			_handle_current_menu_item_class( menu_items_links );
		}

		if (menu_items_links_flyout.length > 0) {
			_handle_current_menu_item_class( menu_items_links_flyout );
		}

		$( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );

		_toggleClick( id );

		_handlePolylangSwitcher( $scope );

		_handleSinglePageMenu( id, layout );

		if( 'horizontal' !== layout ){

			_eventClick( id );
		}else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches ) {

			_eventClick( id );
		}else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {

			_eventClick( id );
		}

		$( '.elementor-element-' + id + ' .hfe-flyout-trigger .hfe-nav-menu-icon' ).off( 'click keyup' ).on( 'click keyup', function() {

			_openMenu( id );
		} );

		$( '.elementor-element-' + id + ' .hfe-flyout-close' ).off( 'click keyup' ).on( 'click keyup', function() {

			_closeMenu( id );
		} );

		$( '.elementor-element-' + id + ' .hfe-flyout-overlay' ).off( 'click' ).on( 'click', function() {

			_closeMenu( id );
		} );	


		$scope.find( '.sub-menu' ).each( function() {

			var parent = $( this ).closest( '.menu-item' );

			$scope.find( parent ).addClass( 'parent-has-child' );
			$scope.find( parent ).removeClass( 'parent-has-no-child' );
		});

		if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
			$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().addClass( 'elementor-button-wrapper' );
			$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).addClass( 'elementor-button' );			
		}

		_borderClass( id );	

		$( window ).on( 'resize', function(){ 

			if( 'horizontal' !== layout ) {

				_eventClick( id );
			}else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches ) {

				_eventClick( id );
			}else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {

				_eventClick( id );
			}

			if( 'horizontal' == layout && window.matchMedia( "( min-width: 977px )" ).matches){

				$( '.elementor-element-' + id + ' div.hfe-has-submenu-container' ).next().css( 'position', 'absolute');	
			}

			if( 'expandible' == layout || 'flyout' == layout ){

				_toggleClick( id );
			}else if ( 'vertical' == layout || 'horizontal' == layout ) {
				if( window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))){

					_toggleClick( id );					
				}else if ( window.matchMedia( "( max-width: 1024px )" ).matches && $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {
					
					_toggleClick( id );
				}
			}

			_borderClass( id );	

		});

        // Acessibility functions

  		$scope.find( '.parent-has-child .hfe-has-submenu-container a').attr( 'aria-haspopup', 'true' );
  		$scope.find( '.parent-has-child .hfe-has-submenu-container a').attr( 'aria-expanded', 'false' );

  		$scope.find( '.hfe-nav-menu__toggle').attr( 'aria-haspopup', 'true' );
  		$scope.find( '.hfe-nav-menu__toggle').attr( 'aria-expanded', 'false' );

  		// End of accessibility functions

		$( document ).trigger( 'hfe_nav_menu_init', id );

		$( '.elementor-element-' + id + ' div.hfe-has-submenu-container' ).on( 'keyup', function(e){

			var $this = $( this );

		  	if( $this.parent().hasClass( 'menu-active' ) ) {

		  		$this.parent().removeClass( 'menu-active' );

		  		$this.parent().next().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
		  		$this.parent().prev().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );

		  		$this.parent().next().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );
		  		$this.parent().prev().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );
			}else { 

				$this.parent().next().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
		  		$this.parent().prev().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );

		  		$this.parent().next().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );
		  		$this.parent().prev().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );

				$this.parent().siblings().find( '.hfe-has-submenu-container a' ).attr( 'aria-expanded', 'false' );

				$this.parent().next().removeClass( 'menu-active' );
		  		$this.parent().prev().removeClass( 'menu-active' );

				event.preventDefault();

				$this.parent().addClass( 'menu-active' );

				if( 'horizontal' !== layout ){
					$this.addClass( 'sub-menu-active' );	
				}
				
				$this.find( 'a' ).attr( 'aria-expanded', 'true' );

				$this.next().css( { 'visibility': 'visible', 'opacity': '1', 'height': 'auto' } );

				if ( 'horizontal' !== layout ) {
						
		  			$this.next().css( 'position', 'relative');			
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
										
  					$this.next().css( 'position', 'relative');		  					
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {
					
  					if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {

  						$this.next().css( 'position', 'relative');	
  					} else if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-none') ) {
  						
  						$this.next().css( 'position', 'absolute');	
  					}
  				}		
			}
		});

		$( '.elementor-element-' + id + ' li.menu-item' ).on( 'keyup', function(e){
			var $this = $( this );

	 		$this.next().find( 'a' ).attr( 'aria-expanded', 'false' );
	 		$this.prev().find( 'a' ).attr( 'aria-expanded', 'false' );
	  		
	  		$this.next().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
	  		$this.prev().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
	  		
	  		$this.siblings().removeClass( 'menu-active' );
	  		$this.next().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );
		  	$this.prev().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );
		  		
		});
	};

	function _handle_current_menu_item_class( layout_links ) {
		layout_links.each(
			function () {
				var $this = $( this );
				if ($this.is( '[href*="#"]' )) {
					var menu_item_parent = $this.parent();
					menu_item_parent.removeClass( 'current-menu-item current-menu-ancestor' );
					$this.click(
						function () {
							var current_index  = menu_item_parent.index(),
								parent_element = $this.closest( 'ul' );
							parent_element.find( 'li' ).not( ':eq(' + current_index + ')' ).removeClass( 'current-menu-item current-menu-ancestor' );
							menu_item_parent.addClass( 'current-menu-item current-menu-ancestor' );
						}
					)
				}
			}
		);
	}

	function _openMenu( id ) {

		var flyout_content = $( '#hfe-flyout-content-id-' + id );
		var layout = $( '#hfe-flyout-content-id-' + id ).data( 'layout' );
		var layout_type = $( '#hfe-flyout-content-id-' + id ).data( 'flyout-type' );
		var wrap_width = flyout_content.width() + 'px';
		var container = $( '.elementor-element-' + id + ' .hfe-flyout-container .hfe-side.hfe-flyout-' + layout );

		$( '.elementor-element-' + id + ' .hfe-flyout-overlay' ).fadeIn( 100 );

		if( 'left' == layout ) {

			$( 'body' ).css( 'margin-left' , '0' );
			container.css( 'left', '0' );

			if( 'push' == layout_type ) {

				$( 'body' ).addClass( 'hfe-flyout-animating' ).css({ 
					position: 'absolute',
					width: '100%',
					'margin-left' : wrap_width,
					'margin-right' : 'auto'
				});
			}	

			container.addClass( 'hfe-flyout-show' );	
		} else {

			$( 'body' ).css( 'margin-right', '0' );
			container.css( 'right', '0' );

			if( 'push' == layout_type ) {

				$( 'body' ).addClass( 'hfe-flyout-animating' ).css({ 
					position: 'absolute',
					width: '100%',
					'margin-left' : '-' + wrap_width,
					'margin-right' : 'auto',
				});
			}

			container.addClass( 'hfe-flyout-show' );
		}		
	}

	function _closeMenu( id ) {

		var flyout_content = $( '#hfe-flyout-content-id-' + id );
		var layout    = $( '#hfe-flyout-content-id-' + id ).data( 'layout' );
		var wrap_width = flyout_content.width() + 'px';
		var layout_type = $( '#hfe-flyout-content-id-' + id ).data( 'flyout-type' );
		var container = $( '.elementor-element-' + id + ' .hfe-flyout-container .hfe-side.hfe-flyout-' + layout );

		$( '.elementor-element-' + id + ' .hfe-flyout-overlay' ).fadeOut( 100 );	

		if( 'left' == layout ) {

			container.css( 'left', '-' + wrap_width );

			if( 'push' == layout_type ) {

				$( 'body' ).css({ 
					position: '',
					'margin-left' : '',
					'margin-right' : '',
				});

				setTimeout( function() {
					$( 'body' ).removeClass( 'hfe-flyout-animating' ).css({ 
						width: '',
					});
				});
			}	

			container.removeClass( 'hfe-flyout-show' );					
		} else {
			container.css( 'right', '-' + wrap_width );
			
			if( 'push' == layout_type ) {

				$( 'body' ).css({
					position: '',
					'margin-right' : '',
					'margin-left' : '',
				});

				setTimeout( function() {
					$( 'body' ).removeClass( 'hfe-flyout-animating' ).css({ 
						width: '',
					});
				});
			}
			container.removeClass( 'hfe-flyout-show' );
		}	
	}

	function _eventClick( id ){

		var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );

		$( '.elementor-element-' + id + ' div.hfe-has-submenu-container' ).off( 'click' ).on( 'click', function( event ) {

			var $this = $( this );

			if( $( '.elementor-element-' + id ).hasClass( 'hfe-link-redirect-child' ) ) {

				if( $this.hasClass( 'sub-menu-active' ) ) {

					if( ! $this.next().hasClass( 'sub-menu-open' ) ) {

						$this.find( 'a' ).attr( 'aria-expanded', 'false' );

						if( 'horizontal' !== layout ){

							event.preventDefault();

							$this.next().css( 'position', 'relative' );	
						} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
							
							event.preventDefault();

							$this.next().css( 'position', 'relative' );	
						} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches && ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
							
							event.preventDefault();	

							$this.next().css( 'position', 'relative' );	
						}	
					
						$this.removeClass( 'sub-menu-active' );
						$this.nextAll('.sub-menu').removeClass( 'sub-menu-open' );
						$this.nextAll('.sub-menu').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
						$this.nextAll('.sub-menu').css( { 'transition': 'none'} );
					} else{

						$this.find( 'a' ).attr( 'aria-expanded', 'false' );
						
						$this.removeClass( 'sub-menu-active' );
						$this.nextAll('.sub-menu').removeClass( 'sub-menu-open' );
						$this.nextAll('.sub-menu').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
						$this.nextAll('.sub-menu').css( { 'transition': 'none'} );

						if ( 'horizontal' !== layout ){

							$this.next().css( 'position', 'relative' );
						} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
							
							$this.next().css( 'position', 'relative' );	
							
						} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches && ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
							
							$this.next().css( 'position', 'absolute' );				
						}	  								
					}		  											
				} else {

					$this.find( 'a' ).attr( 'aria-expanded', 'true' );
					if ( 'horizontal' !== layout ) {
						
						event.preventDefault();
						$this.next().css( 'position', 'relative');			
					} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
						
						event.preventDefault();
						$this.next().css( 'position', 'relative');		  					
					} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {
						event.preventDefault();

						if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {

							$this.next().css( 'position', 'relative');	
						} else if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-none') ) {
							
							$this.next().css( 'position', 'absolute');	
						}
					}	
							
					$this.addClass( 'sub-menu-active' );
					$this.nextAll('.sub-menu').addClass( 'sub-menu-open' );
					$this.nextAll('.sub-menu').css( { 'visibility': 'visible', 'opacity': '1', 'height': 'auto' } );
					$this.nextAll('.sub-menu').css( { 'transition': '0.3s ease'} );
				}
			}
		});

		$( '.elementor-element-' + id + ' .hfe-menu-toggle' ).off( 'click keyup' ).on( 'click keyup',function( event ) {

			var $this = $( this );

		  	if( $this.parent().parent().hasClass( 'menu-active' ) ) {

	  			event.preventDefault();

				$this.parent().parent().removeClass( 'menu-active' );
				$this.parent().parent().next().css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );

				if ( 'horizontal' !== layout ) {
						
		  			$this.parent().parent().next().css( 'position', 'relative');			
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
										
  					$this.parent().parent().next().css( 'position', 'relative');		  					
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {
					
  					if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {

  						$this.parent().parent().next().css( 'position', 'relative');	
  					} else if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-none') ) {
  						
  						$this.parent().parent().next().css( 'position', 'absolute');	
  					}
  				}
			}else { 

				event.preventDefault();

				$this.parent().parent().addClass( 'menu-active' );

				$this.parent().parent().next().css( { 'visibility': 'visible', 'opacity': '1', 'height': 'auto' } );

				if ( 'horizontal' !== layout ) {
						
		  			$this.parent().parent().next().css( 'position', 'relative');			
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
										
  					$this.parent().parent().next().css( 'position', 'relative');		  					
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {
					
  					if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {

  						$this.parent().parent().next().css( 'position', 'relative');	
  					} else if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-none') ) {
  						
  						$this.parent().parent().next().css( 'position', 'absolute');	
  					}
  				}		
			}
		});
	}

	function _borderClass( id ){

		var last_item = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'last-item' );
		var last_item_flyout = $( '.elementor-element-' + id + ' .hfe-flyout-wrapper' ).data( 'last-item' );
		var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );

		$( '.elementor-element-' + id + ' nav').removeClass('hfe-dropdown');

		if ( window.matchMedia( "( max-width: 767px )" ).matches ) {

			if( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet')){
				
				$( '.elementor-element-' + id + ' nav').addClass('hfe-dropdown');
				if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().removeClass( 'elementor-button-wrapper' );
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).removeClass( 'elementor-button' );	
				}	
			}else{
				
				$( '.elementor-element-' + id + ' nav').removeClass('hfe-dropdown');
				if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().addClass( 'elementor-button-wrapper' );
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).addClass( 'elementor-button' );	
				}
			}
		}else if ( window.matchMedia( "( max-width: 1024px )" ).matches ) {

			if( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {
				
				$( '.elementor-element-' + id + ' nav').addClass('hfe-dropdown');
				if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().removeClass( 'elementor-button-wrapper' );
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).removeClass( 'elementor-button' );	
				}
			}else{
				
				$( '.elementor-element-' + id + ' nav').removeClass('hfe-dropdown');
				if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().addClass( 'elementor-button-wrapper' );
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).addClass( 'elementor-button' );
				}
			}
		}else {
			var $parent_element = $( '.elementor-element-' + id );
			$parent_element.find( 'nav').removeClass( 'hfe-dropdown' );
			if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
				$parent_element.find( 'li.menu-item:last-child a.hfe-menu-item' ).parent().addClass( 'elementor-button-wrapper' );
				$parent_element.find( 'li.menu-item:last-child a.hfe-menu-item' ).addClass( 'elementor-button' );
			}
		}

		var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );
		if( 'expandible' == layout ){
			if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
				$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().removeClass( 'elementor-button-wrapper' );
				$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).removeClass( 'elementor-button' );			
			}			
		}
	}

	function _toggleClick( id ){

		if ( $( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).hasClass( 'hfe-active-menu-full-width' ) ){

			$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).next().css( 'left', '0' );

			var width = $( '.elementor-element-' + id ).closest('.elementor-section').outerWidth();
			var sec_pos = $( '.elementor-element-' + id ).closest('.elementor-section').offset().left - $( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).next().offset().left;
			$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).next().css( 'width', width + 'px' );
			$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).next().css( 'left', sec_pos + 'px' );
		}

		$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).off( 'click keyup' ).on( 'click keyup', function( event ) {

			var $this = $( this );
			var $selector = $this.next();

			if ( $this.hasClass( 'hfe-active-menu' ) ) {

				var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );
				var full_width = $selector.data( 'full-width' );
				var toggle_icon = $( '.elementor-element-' + id + ' nav' ).data( 'toggle-icon' );

				$( '.elementor-element-' + id).find( '.hfe-nav-menu-icon' ).html( toggle_icon );

				$this.removeClass( 'hfe-active-menu' );
				$this.attr( 'aria-expanded', 'false' );
				
				if ( 'yes' == full_width ){

					$this.removeClass( 'hfe-active-menu-full-width' );
				
					$selector.css( 'width', 'auto' );
					$selector.css( 'left', '0' );
					$selector.css( 'z-index', '0' );
				}				
			} else {

				var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );
				var full_width = $selector.data( 'full-width' );
				var close_icon = $( '.elementor-element-' + id + ' nav' ).data( 'close-icon' );

				$( '.elementor-element-' + id).find( '.hfe-nav-menu-icon' ).html( close_icon );
				
				$this.addClass( 'hfe-active-menu' );
				$this.attr( 'aria-expanded', 'true' );

				if ( 'yes' == full_width ){

					$this.addClass( 'hfe-active-menu-full-width' );

					var width = $( '.elementor-element-' + id ).closest('.elementor-section').outerWidth();
					var sec_pos = $( '.elementor-element-' + id ).closest('.elementor-section').offset().left - $selector.offset().left;
				
					$selector.css( 'width', width + 'px' );
					$selector.css( 'left', sec_pos + 'px' );
					$selector.css( 'z-index', '9999' );
				}
			}

			if( $( '.elementor-element-' + id + ' nav' ).hasClass( 'menu-is-active' ) ) {

				$( '.elementor-element-' + id + ' nav' ).removeClass( 'menu-is-active' );
			}else {

				$( '.elementor-element-' + id + ' nav' ).addClass( 'menu-is-active' );
			}				
		} );
	}

	function _handleSinglePageMenu( id, layout ) {
		$( '.elementor-element-' + id + ' ul.hfe-nav-menu li a' ).on(
			'click',
			function () {
				var $this = $( this );
				var link  = $this.attr( 'href' );
				var linkValue = '';
				if ( link.includes( '#' ) ) {
					var index     = link.indexOf( '#' );
					linkValue = link.slice( index + 1 );
				}
				if ( linkValue.length > 0 ) {
					if ( 'expandible' == layout ) {
						$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).trigger( "click" );
						if ($this.hasClass( 'hfe-sub-menu-item' )) {
							$( '.elementor-element-' + id + ' .hfe-menu-toggle' ).trigger( "click" );
						}
					} else {
						if ( window.matchMedia( '(max-width: 1024px)' ).matches && ( 'horizontal' == layout || 'vertical' == layout ) ) {
							$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).trigger( "click" );
							if ($this.hasClass( 'hfe-sub-menu-item' )) {
								$( '.elementor-element-' + id + ' .hfe-menu-toggle' ).trigger( "click" );
							}
						} else {
							if ($this.hasClass( 'hfe-sub-menu-item' )) {
								_closeMenu( id );
								$( '.elementor-element-' + id + ' .hfe-menu-toggle' ).trigger( "click" );
							}
							_closeMenu( id );
						}
					}
				}
			}
		);
	}

	/**
	 * This function handles polylang plugin's lang switcher if present in the menu.
	 *
	 * @param {Object} $scope The current element(hfe nav menu) wrapped with jQuery.
	 */
	function _handlePolylangSwitcher( $scope ) {
		var polylangSwitcher = $scope.find( '.hfe-nav-menu nav .pll-parent-menu-item a.hfe-menu-item' );
		var hrefProperty     = polylangSwitcher.prop( 'href' );
		if ( undefined !== hrefProperty && hrefProperty.includes( '#' ) ) {
			var index = hrefProperty.indexOf( '#' );
			var value = hrefProperty.slice( index );
			if ( value === '#pll_switcher' ) {
				polylangSwitcher.prop( 'href', '#' );
			}
		}
	}

	$( window ).on( 'elementor/frontend/init', function () {

		elementorFrontend.hooks.addAction( 'frontend/element_ready/navigation-menu.default', WidgethfeNavMenuHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/hfe-search-button.default', WidgethfeSearchButton );
	});
} )( jQuery );



/*! elementor - v3.6.5 - 27-04-2022 */
(()=>{"use strict";var e,r,_,t,i,a={},n={};function __webpack_require__(e){var r=n[e];if(void 0!==r)return r.exports;var _=n[e]={exports:{}};return a[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=a,e=[],__webpack_require__.O=(r,_,t,i)=>{if(!_){var a=1/0;for(u=0;u<e.length;u++){for(var[_,t,i]=e[u],n=!0,c=0;c<_.length;c++)(!1&i||a>=i)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[c])))?_.splice(c--,1):(n=!1,i<a&&(a=i));if(n){e.splice(u--,1);var o=t();void 0!==o&&(r=o)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[_,t,i]},_=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var i=Object.create(null);__webpack_require__.r(i);var a={};r=r||[null,_({}),_([]),_(_)];for(var n=2&t&&e;"object"==typeof n&&!~r.indexOf(n);n=_(n))Object.getOwnPropertyNames(n).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,__webpack_require__.d(i,a),i},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,_)=>(__webpack_require__.f[_](e,r),r)),[])),__webpack_require__.u=e=>723===e?"lightbox.2b2c155d6ec60974d8c4.bundle.min.js":48===e?"text-path.9f18ebdea5ac00d653e5.bundle.min.js":209===e?"accordion.1840403ce81de408c749.bundle.min.js":745===e?"alert.cbc2a0fee74ee3ed0419.bundle.min.js":120===e?"counter.02cef29c589e742d4c8c.bundle.min.js":192===e?"progress.ca55d33bb06cee4e6f02.bundle.min.js":520===e?"tabs.37d5b4877cdb51ea91e9.bundle.min.js":181===e?"toggle.56f8ace4b1e830c02fc5.bundle.min.js":791===e?"video.d86bfd0676264945e968.bundle.min.js":268===e?"image-carousel.db284b09c0f8a8f1c44d.bundle.min.js":357===e?"text-editor.289ae80d76f0c5abea44.bundle.min.js":52===e?"wp-audio.75f0ced143febb8cd31a.bundle.min.js":413===e?"container.e026b16a99db8a3987c9.bundle.min.js":void 0,__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},i="elementor:",__webpack_require__.l=(e,r,_,a)=>{if(t[e])t[e].push(r);else{var n,c;if(void 0!==_)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var b=o[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==i+_){n=b;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",i+_),n.src=e),t[e]=[r];var onScriptComplete=(r,_)=>{n.onerror=n.onload=null,clearTimeout(p);var i=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),i&&i.forEach((e=>e(_))),r)return r(_)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=onScriptComplete.bind(null,n.onerror),n.onload=onScriptComplete.bind(null,n.onload),c&&document.head.appendChild(n)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");_.length&&(e=_[_.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={162:0};__webpack_require__.f.j=(r,_)=>{var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)_.push(t[2]);else if(162!=r){var i=new Promise(((_,i)=>t=e[r]=[_,i]));_.push(t[2]=i);var a=__webpack_require__.p+__webpack_require__.u(r),n=new Error;__webpack_require__.l(a,(_=>{if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var i=_&&("load"===_.type?"missing":_.type),a=_&&_.target&&_.target.src;n.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",n.name="ChunkLoadError",n.type=i,n.request=a,t[1](n)}}),"chunk-"+r,r)}else e[r]=0},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,_)=>{var t,i,[a,n,c]=_,o=0;if(a.some((r=>0!==e[r]))){for(t in n)__webpack_require__.o(n,t)&&(__webpack_require__.m[t]=n[t]);if(c)var u=c(__webpack_require__)}for(r&&r(_);o<a.length;o++)i=a[o],__webpack_require__.o(e,i)&&e[i]&&e[i][0](),e[a[o]]=0;return __webpack_require__.O(u)},r=self.webpackChunkelementor=self.webpackChunkelementor||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})()})();
/*! elementor - v3.6.5 - 27-04-2022 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[354],{7914:e=>{e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},381:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e,t)=>{t=Array.isArray(t)?t:[t];for(const n of t)if(e.constructor.name===n.prototype[Symbol.toStringTag])return!0;return!1}},8135:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{elements:".elementor-element",nestedDocumentElements:".elementor .elementor-element"},classes:{editMode:"elementor-edit-mode"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$elements:this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))}}getDocumentSettings(e){let t;if(this.isEdit){t={};const e=elementor.settings.page.model;jQuery.each(e.getActiveControls(),(n=>{t[n]=e.attributes[n]}))}else t=this.$element.data("elementor-settings")||{};return this.getItems(t,e)}runElementsHandlers(){this.elements.$elements.each(((e,t)=>elementorFrontend.elementsHandler.runReadyTrigger(t)))}onInit(){this.$element=this.getSettings("$element"),super.onInit(),this.isEdit=this.$element.hasClass(this.getSettings("classes.editMode")),this.isEdit?elementor.on("document:loaded",(()=>{elementor.settings.page.model.on("change",this.onSettingsChange.bind(this))})):this.runElementsHandlers()}onSettingsChange(){}}t.default=_default},2821:(e,t,n)=>{"use strict";var s=n(7914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(3090));class SwiperHandlerBase extends i.default{getInitialSlide(){const e=this.getEditSettings();return e.activeItemIndex?e.activeItemIndex-1:0}getSlidesCount(){return this.elements.$slides.length}togglePauseOnHover(e){e?this.elements.$swiperContainer.on({mouseenter:()=>{this.swiper.autoplay.stop()},mouseleave:()=>{this.swiper.autoplay.start()}}):this.elements.$swiperContainer.off("mouseenter mouseleave")}handleKenBurns(){const e=this.getSettings();this.$activeImageBg&&this.$activeImageBg.removeClass(e.classes.kenBurnsActive),this.activeItemIndex=this.swiper?this.swiper.activeIndex:this.getInitialSlide(),this.swiper?this.$activeImageBg=jQuery(this.swiper.slides[this.activeItemIndex]).children("."+e.classes.slideBackground):this.$activeImageBg=jQuery(this.elements.$slides[0]).children("."+e.classes.slideBackground),this.$activeImageBg.addClass(e.classes.kenBurnsActive)}}t.default=SwiperHandlerBase},3090:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({$element:null,editorListeners:null,onElementChange:null,onEditSettingsChange:null,onPageSettingsChange:null,isEdit:null,__construct:function(e){this.isActive(e)&&(this.$element=e.$element,this.isEdit=this.$element.hasClass("elementor-element-edit-mode"),this.isEdit&&this.addEditorListeners())},isActive:function(){return!0},findElement:function(e){var t=this.$element;return t.find(e).filter((function(){return jQuery(this).closest(".elementor-element").is(t)}))},getUniqueHandlerID:function(e,t){return e||(e=this.getModelCID()),t||(t=this.$element),e+t.attr("data-element_type")+this.getConstructorID()},initEditorListeners:function(){var e=this;if(e.editorListeners=[{event:"element:destroy",to:elementor.channels.data,callback:function(t){t.cid===e.getModelCID()&&e.onDestroy()}}],e.onElementChange){const t=e.getWidgetType()||e.getElementType();let n="change";"global"!==t&&(n+=":"+t),e.editorListeners.push({event:n,to:elementor.channels.editor,callback:function(t,n){e.getUniqueHandlerID(n.model.cid,n.$el)===e.getUniqueHandlerID()&&e.onElementChange(t.model.get("name"),t,n)}})}e.onEditSettingsChange&&e.editorListeners.push({event:"change:editSettings",to:elementor.channels.editor,callback:function(t,n){n.model.cid===e.getModelCID()&&e.onEditSettingsChange(Object.keys(t.changed)[0])}}),["page"].forEach((function(t){var n="on"+t[0].toUpperCase()+t.slice(1)+"SettingsChange";e[n]&&e.editorListeners.push({event:"change",to:elementor.settings[t].model,callback:function(t){e[n](t.changed)}})}))},getEditorListeners:function(){return this.editorListeners||this.initEditorListeners(),this.editorListeners},addEditorListeners:function(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.addListenerOnce(e,t.event,t.callback,t.to)}))},removeEditorListeners:function(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.removeListeners(e,t.event,null,t.to)}))},getElementType:function(){return this.$element.data("element_type")},getWidgetType:function(){const e=this.$element.data("widget_type");if(e)return e.split(".")[0]},getID:function(){return this.$element.data("id")},getModelCID:function(){return this.$element.data("model-cid")},getElementSettings:function(e){let t={};const n=this.getModelCID();if(this.isEdit&&n){const e=elementorFrontend.config.elements.data[n],s=e.attributes;let i=s.widgetType||s.elType;s.isInner&&(i="inner-"+i);let r=elementorFrontend.config.elements.keys[i];r||(r=elementorFrontend.config.elements.keys[i]=[],jQuery.each(e.controls,((e,t)=>{t.frontend_available&&r.push(e)}))),jQuery.each(e.getActiveControls(),(function(e){if(-1!==r.indexOf(e)){let n=s[e];n.toJSON&&(n=n.toJSON()),t[e]=n}}))}else t=this.$element.data("settings")||{};return this.getItems(t,e)},getEditSettings:function(e){var t={};return this.isEdit&&(t=elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),this.getItems(t,e)},getCurrentDeviceSetting:function(e){return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(),e)},onInit:function(){this.isActive(this.getSettings())&&elementorModules.ViewModule.prototype.onInit.apply(this,arguments)},onDestroy:function(){this.isEdit&&this.removeEditorListeners(),this.unbindEvents&&this.unbindEvents()}})},6412:(e,t,n)=>{"use strict";var s=n(7914),i=s(n(5955)),r=s(n(8135)),o=s(n(5658)),l=s(n(3090)),c=s(n(2821));i.default.frontend={Document:r.default,tools:{StretchElement:o.default},handlers:{Base:l.default,SwiperBase:c.default}}},5658:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({getDefaultSettings:function(){return{element:null,direction:elementorFrontend.config.is_rtl?"right":"left",selectors:{container:window}}},getDefaultElements:function(){return{$element:jQuery(this.getSettings("element"))}},stretch:function(){var e,t=this.getSettings("selectors.container");try{e=jQuery(t)}catch(e){}e&&e.length||(e=jQuery(this.getDefaultSettings().selectors.container)),this.reset();var n=this.elements.$element,s=e.innerWidth(),i=n.offset().left,r="fixed"===n.css("position"),o=r?0:i;if(window!==e[0]){var l=e.offset().left;r&&(o=l),i>l&&(o=i-l)}r||(elementorFrontend.config.is_rtl&&(o=s-(n.outerWidth()+o)),o=-o);var c={};c.width=s+"px",c[this.getSettings("direction")]=o+"px",n.css(c)},reset:function(){var e={width:""};e[this.getSettings("direction")]="",this.elements.$element.css(e)}})},2618:(e,t,n)=>{"use strict";var s=n(7914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(7597)),r=s(n(381));class ArgsObject extends i.default{static getInstanceType(){return"ArgsObject"}constructor(e){super(),this.args=e}requireArgument(e,t=this.args){if(!t.hasOwnProperty(e))throw Error(`${e} is required.`)}requireArgumentType(e,t,n=this.args){if(this.requireArgument(e,n),typeof n[e]!==t)throw Error(`${e} invalid type: ${t}.`)}requireArgumentInstance(e,t,n=this.args){if(this.requireArgument(e,n),!(n[e]instanceof t||(0,r.default)(n[e],t)))throw Error(`${e} invalid instance.`)}requireArgumentConstructor(e,t,n=this.args){if(this.requireArgument(e,n),n[e].constructor.toString()!==t.prototype.constructor.toString())throw Error(`${e} invalid constructor type.`)}}t.default=ArgsObject},869:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ForceMethodImplementation=void 0;class ForceMethodImplementation extends Error{constructor(e={}){super(`${e.isStatic?"static ":""}${e.fullName}() should be implemented, please provide '${e.functionName||e.fullName}' functionality.`),Error.captureStackTrace(this,ForceMethodImplementation)}}t.ForceMethodImplementation=ForceMethodImplementation;t.default=()=>{const e=Error().stack.split("\n")[2].trim(),t=e.startsWith("at new")?"constructor":e.split(" ")[1],n={};if(n.functionName=t,n.fullName=t,n.functionName.includes(".")){const e=n.functionName.split(".");n.className=e[0],n.functionName=e[1]}else n.isStatic=!0;throw new ForceMethodImplementation(n)}},7597:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class InstanceType{static[Symbol.hasInstance](e){let t=super[Symbol.hasInstance](e);if(e&&!e.constructor.getInstanceType)return t;if(e&&(e.instanceTypes||(e.instanceTypes=[]),t||this.getInstanceType()===e.constructor.getInstanceType()&&(t=!0),t)){const t=this.getInstanceType===InstanceType.getInstanceType?"BaseInstanceType":this.getInstanceType();-1===e.instanceTypes.indexOf(t)&&e.instanceTypes.push(t)}return!t&&e&&(t=e.instanceTypes&&Array.isArray(e.instanceTypes)&&-1!==e.instanceTypes.indexOf(this.getInstanceType())),t}constructor(){let e=new.target;const t=[];for(;e.__proto__&&e.__proto__.name;)t.push(e.__proto__),e=e.__proto__;t.reverse().forEach((e=>this instanceof e))}static getInstanceType(){elementorModules.ForceMethodImplementation()}}t.default=InstanceType},1192:e=>{"use strict";const Module=function(){const e=jQuery,t=arguments,n=this,s={};let i;const ensureClosureMethods=function(){e.each(n,(function(e){const t=n[e];"function"==typeof t&&(n[e]=function(){return t.apply(n,arguments)})}))},initSettings=function(){i=n.getDefaultSettings();const s=t[0];s&&e.extend(!0,i,s)},init=function(){n.__construct.apply(n,t),ensureClosureMethods(),initSettings(),n.trigger("init")};this.getItems=function(e,t){if(t){const n=t.split("."),s=n
.splice(0,1);if(!n.length)return e[s];if(!e[s])return;return this.getItems(e[s],n.join("."))}return e},this.getSettings=function(e){return this.getItems(i,e)},this.setSettings=function(t,s,r){if(r||(r=i),"object"==typeof t)return e.extend(r,t),n;const o=t.split("."),l=o.splice(0,1);return o.length?(r[l]||(r[l]={}),n.setSettings(o.join("."),s,r[l])):(r[l]=s,n)},this.getErrorMessage=function(e,t){let n;if("forceMethodImplementation"===e)n=`The method '${t}' must to be implemented in the inheritor child.`;else n="An error occurs";return n},this.forceMethodImplementation=function(e){throw new Error(this.getErrorMessage("forceMethodImplementation",e))},this.on=function(t,i){if("object"==typeof t)return e.each(t,(function(e){n.on(e,this)})),n;return t.split(" ").forEach((function(e){s[e]||(s[e]=[]),s[e].push(i)})),n},this.off=function(e,t){if(!s[e])return n;if(!t)return delete s[e],n;const i=s[e].indexOf(t);return-1!==i&&(delete s[e][i],s[e]=s[e].filter((e=>e))),n},this.trigger=function(t){const i="on"+t[0].toUpperCase()+t.slice(1),r=Array.prototype.slice.call(arguments,1);n[i]&&n[i].apply(n,r);const o=s[t];return o?(e.each(o,(function(e,t){t.apply(n,r)})),n):n},init()};Module.prototype.__construct=function(){},Module.prototype.getDefaultSettings=function(){return{}},Module.prototype.getConstructorID=function(){return this.constructor.name},Module.extend=function(e){const t=jQuery,n=this,child=function(){return n.apply(this,arguments)};return t.extend(child,n),(child.prototype=Object.create(t.extend({},n.prototype,e))).constructor=child,child.__super__=n.prototype,child},e.exports=Module},6516:(e,t,n)=>{"use strict";var s=n(7914)(n(2640));e.exports=s.default.extend({getDefaultSettings:function(){return{container:null,items:null,columnsCount:3,verticalSpaceBetween:30}},getDefaultElements:function(){return{$container:jQuery(this.getSettings("container")),$items:jQuery(this.getSettings("items"))}},run:function(){var e=[],t=this.elements.$container.position().top,n=this.getSettings(),s=n.columnsCount;t+=parseInt(this.elements.$container.css("margin-top"),10),this.elements.$items.each((function(i){var r=Math.floor(i/s),o=jQuery(this),l=o[0].getBoundingClientRect().height+n.verticalSpaceBetween;if(r){var c=o.position(),a=i%s,u=c.top-t-e[a];u-=parseInt(o.css("margin-top"),10),u*=-1,o.css("margin-top",u+"px"),e[a]+=l}else e.push(l)}))}})},400:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Scroll{static scrollObserver(e){let t=0;const n={root:e.root||null,rootMargin:e.offset||"0px",threshold:((e=0)=>{const t=[];if(e>0&&e<=100){const n=100/e;for(let e=0;e<=100;e+=n)t.push(e/100)}else t.push(0);return t})(e.sensitivity)};return new IntersectionObserver((function handleIntersect(n){const s=n[0].boundingClientRect.y,i=n[0].isIntersecting,r=s<t?"down":"up",o=Math.abs(parseFloat((100*n[0].intersectionRatio).toFixed(2)));e.callback({sensitivity:e.sensitivity,isInViewport:i,scrollPercentage:o,intersectionScrollDirection:r}),t=s}),n)}static getElementViewportPercentage(e,t={}){const n=e[0].getBoundingClientRect(),s=t.start||0,i=t.end||0,r=window.innerHeight*s/100,o=window.innerHeight*i/100,l=n.top-window.innerHeight,c=0-l+r,a=n.top+r+e.height()-l+o,u=Math.max(0,Math.min(c/a,1));return parseFloat((100*u).toFixed(2))}static getPageScrollPercentage(e={},t){const n=e.start||0,s=e.end||0,i=t||document.documentElement.scrollHeight-document.documentElement.clientHeight,r=i*n/100,o=i+r+i*s/100;return(document.documentElement.scrollTop+document.body.scrollTop+r)/o*100}}},2640:(e,t,n)=>{"use strict";var s=n(7914)(n(1192));e.exports=s.default.extend({elements:null,getDefaultElements:function(){return{}},bindEvents:function(){},onInit:function(){this.initElements(),this.bindEvents()},initElements:function(){this.elements=this.getDefaultElements()}})},5955:(e,t,n)=>{"use strict";var s=n(7914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(1192)),r=s(n(2640)),o=s(n(2618)),l=s(n(6516)),c=s(n(400)),a=s(n(869)),u=window.elementorModules={Module:i.default,ViewModule:r.default,ArgsObject:o.default,ForceMethodImplementation:a.default,utils:{Masonry:l.default,Scroll:c.default}};t.default=u}},e=>{var t;t=6412,e(e.s=t)}]);

var elementorFrontendConfig = {
    "environmentMode": {
        "edit": false,
        "wpPreview": false,
        "isScriptDebug": false
    },
    "i18n": {
       
        "pinIt": "Pinear",
        "download": "Descargar",
        "downloadImage": "Descargar imagen",
        "fullscreen": "Pantalla completa",
        "zoom": "Zoom",
        "share": "Compartir",
        "playVideo": "Reproducir v\u00eddeo",
        "previous": "Anterior",
        "next": "Siguiente",
        "close": "Cerrar"
    },
    "is_rtl": false,
    "breakpoints": {
        "xs": 0,
        "sm": 480,
        "md": 768,
        "lg": 1025,
        "xl": 1440,
        "xxl": 1600
    },
    "responsive": {
        "breakpoints": {
            "mobile": {
                "label": "M\u00f3vil",
                "value": 767,
                "default_value": 767,
                "direction": "max",
                "is_enabled": true
            },
            "mobile_extra": {
                "label": "M\u00f3vil grande",
                "value": 880,
                "default_value": 880,
                "direction": "max",
                "is_enabled": false
            },
            "tablet": {
                "label": "Tableta",
                "value": 1024,
                "default_value": 1024,
                "direction": "max",
                "is_enabled": true
            },
            "tablet_extra": {
                "label": "Tableta grande",
                "value": 1200,
                "default_value": 1200,
                "direction": "max",
                "is_enabled": false
            },
            "laptop": {
                "label": "Port\u00e1til",
                "value": 1366,
                "default_value": 1366,
                "direction": "max",
                "is_enabled": false
            },
            "widescreen": {
                "label": "Pantalla grande",
                "value": 2400,
                "default_value": 2400,
                "direction": "min",
                "is_enabled": false
            }
        }
    },
    "version": "3.6.5",
    "is_static": false,
    "experimentalFeatures": {
        "e_dom_optimization": true,
        "e_optimized_assets_loading": true,
        "e_optimized_css_loading": true,
        "a11y_improvements": true,
        "e_import_export": true,
        "additional_custom_breakpoints": true,
        "e_hidden_wordpress_widgets": true,
        "theme_builder_v2": true,
        "landing-pages": true,
        "elements-color-picker": true,
        "favorite-widgets": true,
        "admin-top-bar": true,
        "page-transitions": true,
        "notes": true,
        "form-submissions": true,
        "e_scroll_snap": true
    },
    "urls": {
      
    },
    "settings": {
        "page": [],
        "editorPreferences": []
    },
    "kit": {
        "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
        "global_image_lightbox": "yes",
        "lightbox_enable_counter": "yes",
        "lightbox_enable_fullscreen": "yes",
        "lightbox_enable_zoom": "yes",
        "lightbox_enable_share": "yes",
        "lightbox_title_src": "title",
        "lightbox_description_src": "description"
    }
    
};

