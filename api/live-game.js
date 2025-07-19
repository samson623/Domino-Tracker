import { supabase } from '../lib/supabase.js';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (req.method === 'POST') {
            const { gameId, gameState, timestamp } = req.body;

            const { error } = await supabase
                .from('live_games')
                .upsert({
                    game_id: gameId,
                    game_state: gameState,
                    session_id: req.headers['x-session-id'] || 'unknown',
                    updated_at: timestamp
                });
            if (error) throw error;
            return res.status(200).json({ success: true });
        }

        if (req.method === 'GET') {
            const { gameId } = req.query;
            const { data, error } = await supabase
                .from('live_games')
                .select('*')
                .eq('game_id', gameId)
                .single();
            if (error) throw error;
            return res.status(200).json(data);
        }

        if (req.method === 'DELETE') {
            const { gameId } = req.query;
            await supabase
                .from('live_games')
                .delete()
                .eq('game_id', gameId);
            return res.status(200).json({ success: true });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
