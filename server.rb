require 'sinatra'

set :public_dir, Proc.new { File.join(root, "public") }
set :public_folder, 'public'

get '/' do
	erb :index
end