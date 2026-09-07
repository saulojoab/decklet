FROM archlinux:base

RUN pacman -Syu --noconfirm && \
    pacman -S --needed --noconfirm \
        base-devel \
        nodejs \
        npm \
        rust \
        webkit2gtk-4.1 \
        curl \
        wget \
        file \
        openssl \
        openssh \
        appmenu-gtk-module \
        libappindicator-gtk3 \
        librsvg \
        xdotool \
        git \
        sudo \
        && \
    pacman -Scc --noconfirm

RUN useradd -m -G wheel vscode && \
    echo "vscode ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/vscode

USER vscode

WORKDIR /workspaces/decklet