
	/*----------------------------------------
	 VALIDATIONS JQUERY FORM
	 ----------------------------------------*/
	$(function () {
		/* RULES */
		$(".subscribes-form").validate({
			focusCleanup: true,
			focusInvalid: false,
      ignore: ":hidden",
			rules: {
        email: "required",
        checkbox: {
          required: true
        }
      },
      messages: {
        email: "Введен некорректный e-mail",
        checkbox: "Для продолжения нужно согласие с условиями",
      },
      submitHandler: function(element) {
        $(".subscribes-form").addClass('validate');
      }
		});
		$(".letter-form").validate({
			focusCleanup: true,
			focusInvalid: false,
			rules: {
				name: "required",
        email: "required",
        message: "required"
      },
      messages: {
        email: "Введен некорректный e-mail",
        name: "Введено некорректное имя",
        message: "Введено некорректное сообщение"
      },
      submitHandler: function(element) {
        $(".letter-form").addClass('validate');
      }
		});

    $(".modal-feedback-form").validate({
      focusCleanup: true,
      focusInvalid: false,
      rules: {
        name: "required",
        email: "required",
        message: "required"
      },
      messages: {
        email: "Введен некорректный e-mail",
        name: "Введено некорректное имя",
        message: "Введено некорректное сообщение"
      },
      submitHandler: function(element) {
        $(".modal-feedback-form").addClass('validate');
      }
    });

	});

