require 'sinatra'
require 'mongo'
require 'fantasy_football_nerd'

BYE_WEEKS = 4..11
WEEKS = 1..17
POSITIONS = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF']
POSITIONS_WITHOUT_DEF = POSITIONS - ['DEF']

Mongo::Logger.logger.level = ::Logger::FATAL
mongo = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'fantasy-football')

get '/' do
  'Hello'
end

get '/updatedata' do
  teams_doc = {
    dt: Time.now,
    teams: FFNerd.teams.map {|team| team.to_h}
  }

  mongo[:teams].insert_one(teams_doc)

  games_doc =  {
    dt: Time.now,
    games: FFNerd.schedule.map {|game| game.to_h}
  }

  mongo[:games].insert_one(games_doc)

  players_doc = {
    dt: Time.now,
    players: FFNerd.players.map {|player| player.to_h}
  }

  mongo[:players].insert_one(players_doc)

  BYE_WEEKS.map do |week_num|
    bye_week_doc = {
      dt: Time.now,
      week_num: week_num,
      teams: FFNerd.byes(week_num).map {|team| team.to_h}
    }

    mongo[:bye_weeks].insert_one(bye_week_doc)
  end

  WEEKS.map do |week_num|
    injury_week_doc = {
      dt: Time.now,
      week_num: week_num,
      players: FFNerd.injuries(week_num).map {|player| player.to_h}
    }

    mongo[:injury_weeks].insert_one(injury_week_doc)
  end

  auction_values_doc = {
    dt: Time.now,
    players: FFNerd.auction_values.map {|player| player.to_h}
  }

  mongo[:auction_values].insert_one(auction_values_doc)

  current_week_doc = {
    dt: Time.now,
    current_week: FFNerd.current_week
  }

  mongo[:current_week].insert_one(current_week_doc)

  draft_rankings_doc = {
    dt: Time.now,
    players: FFNerd.standard_draft_rankings.map {|player| player.to_h}
  }

  mongo[:draft_rankings].insert_one(draft_rankings_doc)

  POSITIONS.map do |position|
    draft_projections_doc = {
      dt: Time.now,
      position: position,
      players: FFNerd.draft_projections(position).map {|player| player.to_h}
    }

    mongo[:draft_projections].insert_one(draft_projections_doc)
  end

  WEEKS.map do |week|
    POSITIONS.map do |position|
      weekly_rankings_doc = {
        dt: Time.now,
        week: week,
        position: position,
        players: FFNerd.weekly_rankings(position, week).map {|player| player.to_h}
      }

      mongo[:weekly_rankings].insert_one(weekly_rankings_doc)
    end
  end

  WEEKS.map do |week|
    POSITIONS_WITHOUT_DEF.map do |position|
      weekly_projections_doc = {
        dt: Time.now,
        week: week,
        position: position,
        players: FFNerd.weekly_projections(position, week).map {|player| player.to_h}
      }

      mongo[:weekly_projections].insert_one(weekly_projections_doc)
    end
  end

  'success'
end
