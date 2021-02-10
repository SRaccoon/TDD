# This will start a code-server container and expose it at http://127.0.0.1:8080.
# It will also mount your current directory into the container as `/home/coder/project`
# and forward your UID/GID so that all file system operations occur as your user outside
# the container.
#
# Your $HOME/.config is mounted at $HOME/.config within the container to ensure you can
# easily access/modify your code-server config in $HOME/.config/code-server/config.json
# outside the container.
mkdir -p ~/.config
sudo docker create \
--name=code-server \
--net=host \
-e PUID=$UID \
-e PGID=$(id -g $USER) \
-e TZ=Asia/Seoul \
-e PASSWORD='qwe123' \
-e SUDO_PASSWORD='qwe123' \
-v /data/code-server/config:/config \
--restart unless-stopped \
linuxserver/code-server