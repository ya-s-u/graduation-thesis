export:
	ptex2pdf -l -ot "-synctex=1 -file-line-error" "main.tex"
	open main.pdf
