require 'sinatra'
require 'sinatra/json'

require_relative 'models'


set :public_folder, File.dirname(__FILE__) + '/assets'


get '/' do
  my_team = MyTeam.get
  @context = {
    players: my_team['players']
  }
  erb :index, layout: :base
end

get '/players' do
  json FFNerdCache::Players.get['players']
end

post '/players/add' do
  JSON.parse request.body.read
  'test'
end

get '/updatedata' do
  FFNerdCache::AuctionValues.update
  FFNerdCache::ByeWeeks.update
  FFNerdCache::CurrentWeek.update
  FFNerdCache::DraftProjections.update
  FFNerdCache::DraftRankings.update
  FFNerdCache::Games.update
  FFNerdCache::Injuries.update
  FFNerdCache::Players.update
  FFNerdCache::Teams.update
  FFNerdCache::WeeklyProjections.update
  FFNerdCache::WeeklyRankings.update
end
