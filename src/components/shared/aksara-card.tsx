"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AksaraCardProps {
  aksara: string;
  latin: string;
  description?: string;
  audioUrl?: string;
}

export function AksaraCard({ aksara, latin, description, audioUrl }: AksaraCardProps) {
  return (
    <Card className="text-center shadow-md hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{aksara}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-gray-700 mb-2">{latin}</p>
        {description && <p className="text-sm text-gray-500">{description}</p>}
        {audioUrl && (
          <audio controls className="mx-auto mt-3">
            <source src={audioUrl} type="audio/mpeg" />
            Browser Anda tidak mendukung pemutar audio.
          </audio>
        )}
      </CardContent>
    </Card>
  );
}
