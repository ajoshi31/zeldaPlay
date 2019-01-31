import { Module } from '@nestjs/common';

import { NoteController } from '@Note/note.controller';
import { NoteService } from '@Note/note.service';
import { SharedModule } from '@Shared/shared.module';
import { DbNoteService } from './db-note/db-note.service';

@Module({
  imports: [SharedModule],
  controllers: [NoteController],
  providers: [NoteService, DbNoteService]
})
export class NoteModule {}