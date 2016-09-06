require 'sinatra'
require 'sinatra/json'

require_relative 'models'


get '/players' do
  response['Access-Control-Allow-Origin'] = 'http://localhost:3000'
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
