require 'sinatra'

require_relative 'models'


get '/' do
  erb :index
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
