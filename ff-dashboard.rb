require 'sinatra'
require_relative 'models'

get '/' do
  'Hello'
end

get '/updatedata' do
  FFNerdCache::Teams.update
  FFNerdCache::Games.update
  FFNerdCache::Players.update
  FFNerdCache::ByeWeeks.update
  FFNerdCache::Injuries.update
  FFNerdCache::AuctionValues.update
  FFNerdCache::CurrentWeek.update
  FFNerdCache::DraftRankings.update
  FFNerdCache::DraftProjections.update
  FFNerdCache::WeeklyRankings.update
  FFNerdCache::WeeklyProjections.update
end
