require 'mongo'
require 'fantasy_football_nerd'


Mongo::Logger.logger.level = ::Logger::FATAL
MONGO = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'fantasy-football')

BYE_WEEKS = 4..11
WEEKS = 1..17
POSITIONS = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF']
POSITIONS_WITHOUT_DEF = POSITIONS - ['DEF']


module FFNerdCache
  def self.get(collection, query = {})
    MONGO[collection].find(query).sort(ts: -1).limit(1).first.to_h
  end

  class AuctionValues
    def self.get
      FFNerdCache.get(:auction_values)
    end

    def self.update
      auction_values_doc = {
        dt: Time.now,
        players: FFNerd.auction_values.map {|player| player.to_h}
      }

      MONGO[:auction_values].insert_one(auction_values_doc)
    end
  end

  class ByeWeeks
    def self.get(query)
      FFNerdCache.get(:bye_weeks, query)
    end

    def self.update
      BYE_WEEKS.map do |week_num|
        bye_week_doc = {
          dt: Time.now,
          week_num: week_num,
          teams: FFNerd.byes(week_num).map {|team| team.to_h}
        }

        MONGO[:bye_weeks].insert_one(bye_week_doc)
      end
    end
  end

  class CurrentWeek
    def self.get
      FFNerdCache.get(:current_week)
    end

    def self.update
      current_week_doc = {
        dt: Time.now,
        current_week: FFNerd.current_week
      }

      MONGO[:current_week].insert_one(current_week_doc)
    end
  end

  class DraftProjections
    def self.get(query)
      FFNerdCache.get(:draft_projections, query)
    end

    def self.update
      POSITIONS.map do |position|
        draft_projections_doc = {
          dt: Time.now,
          position: position,
          players: FFNerd.draft_projections(position).map {|player| player.to_h}
        }

        MONGO[:draft_projections].insert_one(draft_projections_doc)
      end
    end
  end

  class DraftRankings
    def self.get
      FFNerdCache.get(:draft_rankings)
    end

    def self.update
      draft_rankings_doc = {
        dt: Time.now,
        players: FFNerd.standard_draft_rankings.map {|player| player.to_h}
      }

      MONGO[:draft_rankings].insert_one(draft_rankings_doc)
    end
  end

  class Games
    def self.get
      FFNerdCache.get(:games)
    end

    def self.update
      games_doc =  {
        dt: Time.now,
        games: FFNerd.schedule.map {|game| game.to_h}
      }

      MONGO[:games].insert_one(games_doc)
    end
  end

  class Injuries
    def self.get(query)
      FFNerdCache.get(:injuries, query)
    end

    def self.update
      WEEKS.map do |week_num|
        injuries_doc = {
          dt: Time.now,
          week_num: week_num,
          players: FFNerd.injuries(week_num).map {|player| player.to_h}
        }

        MONGO[:injuries].insert_one(injuries_doc)
      end
    end
  end

  class Players
    def self.get
      FFNerdCache.get(:players)
    end

    def self.update
      players_doc = {
        dt: Time.now,
        players: FFNerd.players.map {|player| player.to_h}
      }

      MONGO[:players].insert_one(players_doc)
    end
  end

  class Teams
    def self.get
      FFNerdCache.get(:teams)
    end

    def self.update
      teams_doc = {
        dt: Time.now,
        teams: FFNerd.teams.map {|team| team.to_h}
      }

      MONGO[:teams].insert_one(teams_doc)
    end
  end

  class WeeklyProjections
    def self.get(query)
      FFNerdCache.get(:weekly_projections, query)
    end

    def self.update
      WEEKS.map do |week|
        POSITIONS_WITHOUT_DEF.map do |position|
          weekly_projections_doc = {
            dt: Time.now,
            week: week,
            position: position,
            players: FFNerd.weekly_projections(position, week).map {|player| player.to_h}
          }

          MONGO[:weekly_projections].insert_one(weekly_projections_doc)
        end
      end
    end
  end

  class WeeklyRankings
    def self.get(query)
      FFNerdCache.get(:weekly_rankings, query)
    end

    def self.update
      WEEKS.map do |week|
        POSITIONS.map do |position|
          weekly_rankings_doc = {
            dt: Time.now,
            week: week,
            position: position,
            players: FFNerd.weekly_rankings(position, week).map {|player| player.to_h}
          }

          MONGO[:weekly_rankings].insert_one(weekly_rankings_doc)
        end
      end
    end
  end
end
