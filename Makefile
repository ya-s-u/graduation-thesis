export:
	find . -name '*.tex' | xargs sed -i "" 's/、/，/g'
	find . -name '*.tex' | xargs sed -i "" 's/。/．/g'
	ptex2pdf -l -ot "-synctex=1 -file-line-error" "main.tex"
	open main.pdf
