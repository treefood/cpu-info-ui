filename=cpu-info-ui-linux-armv7l
fileext=.tar
id=cpu-info
appname=cpu-info-ui
user=pi
server=192.168.86.30

echo removing old tar ball

rm $filename$fileext

7z a $filename -ttar $filename

sftp -i $id $user@$server << EOF
put $filename$fileext /home/$user
quit
EOF

ssh -i $id $user@$server << EOF
rm -rf $filename
echo $filename$fileext
tar -xvf $filename$fileext
chmod 777 $filename/$appname
sudo shutdown -r 2
echo Your Pi will restart in a couple minutes. Goodbye!
exit
EOF