set :application, "indiadilse"
set :repository,  "https://github.com/jaipratik/node-express-mongoose-demo"

set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "174.129.18.232"                          # Your HTTP server, Apache/etc
role :app, "174.129.18.232"                          # This may be the same as your `Web` server
role :db,  "174.129.18.232", :primary => true # This is where Rails migrations will run
role :db,  "174.129.18.232"




set :deploy_via, :remote_cache
set :copy_exclude, [".git", ".DS_Store"]

default_run_options[:pty] =  true

set :scm, :git

set :deploy_to, "/home/ubuntu/sites/#{application}"
set :use_sudo, false
set :keep_releases, 3


set :branch, "prod"


set :scm_username, "ubuntu" 

#set :runner, user 


set :user, "ubuntu"            
set :use_sudo, false
set :admin_runner, "user"



# this tells capistrano what to do when you deploy
namespace :deploy do

  desc <<-DESC
  A macro-task that updates the code and fixes the symlink.
  DESC
  task :default do
    transaction do
      update_code
      symlink
    end
  end

  task :update_code, :except => { :no_release => true } do
    on_rollback { run "rm -rf #{release_path}; true" }
    strategy.deploy!
  end

  task :after_deploy do
    cleanup
  end

end



