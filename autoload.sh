# use in n/vim to restart on save:
# :autocmd BufWritePost * silent! !./autoload.sh
#!/bin/bash
pkill boltapp || true
go build -o boltapp
echo http://localhost:10714
./boltapp >> log.txt 2>&1 &