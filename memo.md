# ssh -i "lee-win.pem" ubuntu@ec2-18-118-220-213.us-east-2.compute.amazonaws.com

# 18.222.124.211

# node js 설치
sudo apt-get update
sudo apt-get install -y build-essetial
sudo apt-get install curl
curl -sL http://deb.nodesource.com/setup_14.x | sudo -E bash --
sudo apt-get install -y node.js
nond -v 설치확인
npm -v 설치확인
# nginx 설치
sudo apt-get install nginx

1. nginx.conf : 설정파일 (text파일)
2. sites-availabel : (폴더) 애는 설정파일 저장소
ex) 변수선언해서 내용을 입력만 받은 상태 arr =[1,2,3,4,5]

3. sites-enabled : (폴더) 애는 설정파일을 실행시키는 아이
ex) arr[0]//1
arr[2]//3
arr[4]//5
윈도우로 -> 바로가기로 만들어서 실행시킵니다 ->심볼릭 링크

sites-availabel -> 설정파일 만들고
sites-enabled -> 바로가기 셋팅하기

nginx 실행

vi 많이 쓸거임

cp 폴더나 파일을 복사하는 명령어
mv 폴더나 파일을 이동시키는 명령어

리눅스 기본적으로 보안이 높다
unix , liunx , window
유료    무료    유료
        <- 프리웨어

계정에 따른권한들이 잘 설정되어있다.
            소유권 그룹 root 최고관리자만 변경가능
drwxr-xr-x  2 root root 4096 Jul 20 02:42 sites-enabled       
drwxr-xr-x  2 root root 4096 Jul 20 02:42 snippets
-rw-r--r--  1 root root  664 Feb  4  2019 uwsgi_params        
-rw-r--r--  1 root root 3071 Feb  4  2019 win-utf

cp -r [기존디렉토리] [변경할디렉토리]

sudo cp -r /etc/nginx/sites-available/ /etc/nginx/sites-available-backup

sudo cp -r /etc/nginx/sites-enabled/ /etc/nginx/sites-enabled-backup

/etc/nginx 
cd sites-available
cd sites-enabled
sudo rm default 최고관리자 삭제

sudo vi myapp.conf

server {
    listen 80; //포트 실행번호
    location / { //uri 가 뭐냐
        root /home/ubuntu/www;  //내가 실행시킬 파일경로
        index index.html index.htm; //내가 실행시킬 파일명
        try_files $uri /index.html; // 링크이동 막기 http://localhost:3000/about
    }
}

cp [기존디렉토리] [변경할디렉토리]
mv [기존디렉토리] [변경할디렉토리]
ln -s[기존디렉토리] [바로가기디렉토리]

/etc/nginx/sites-available
myapp.conf

./myapp.conf
sudo ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/myapp.conf

/etc/nginx or cd ..
cd ./sites-enabled
ls -al

sudo nginx -t

sudo systemctl start nginx
sudo systemctl stop nginx


cd /etc/nginx
ls -al/sites-available 폴더 확인
cd sites-available

ls -al //myapp.conf 확인

sudo vi myapp.conf 최고관리자로 내용확인

/home/ubuntu/ www 폴더생성
www 안에 들어가서 index.html 생성할거다

cp
mv
ln
vi
cd
ls -al
ps -ef | grep [찾을 프로세스명]
kill -9 [pid]
pwd

폴더구조


mkdir 폴더 생성 명령어 

vi index.html

sudo systemctl restart nginx
sudo systemctl start nginx
sudo systemctl stop nginx

i 내용수정키
esc 내용수정 나가기

/etc/nginx/sites-enabled 들어와서
ls -al 쳐서 myapp.conf 제대로 설정 되어있는지 봐야한다.




도메인 연결
ungoos.com 대여 1년 3년
money 13500
[도메인사이트]
가비아 
후이즈
싼곳 1년 / 3년

도메인 미리 사야한다??


백엔드 프론트서버 나눠서 계속 진행하게될경우
도메인 어느정도 필수
login 새로고침하면 로그인이 풀림 cookie

git clone https://github.com/ingoo-code/webpack5.git

cd front # 경로확인

dist 폴더 누가 만들었을까?? webpack 만들어준다.
dist 폴더는 베포할때만 필요하다 index.html있으면 된다. 개발할때는 필요없다.





