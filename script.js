 function toggleTitleColor() {
            const title = document.getElementById('title');
            title.classList.toggle('title-color-change');
        }
        function toggleListVisibility(id) {
            const list = document.getElementById(id);
            list.classList.toggle('hidden');
        }
        function highlightElement(element) {
            element.classList.toggle('selected');
        }