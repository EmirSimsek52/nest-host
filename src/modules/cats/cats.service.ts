import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './ create-cat.dto';
@Injectable()
export class CatsService {
  private cats = [
    { id: 1, name: 'Luna', breed: 'British Shorthair', color: 'Gri', age: 3 },
    { id: 2, name: 'Boncuk', breed: 'Turkish Van', color: 'Beyaz', age: 5 },
    { id: 3, name: 'Pamuk', breed: 'Persian', color: 'Beyaz', age: 2 },
    { id: 4, name: 'Tekir', breed: 'Tabby', color: 'Kahverengi', age: 4 },
    { id: 5, name: 'Duman', breed: 'Russian Blue', color: 'Gri-Mavi', age: 1 },
    { id: 6, name: 'Sarman', breed: 'Turkish Angora', color: 'Sarı', age: 6 },
    { id: 7, name: 'Minnoş', breed: 'Siamese', color: 'Krem', age: 2 },
    { id: 8, name: 'Zeytin', breed: 'Scottish Fold', color: 'Siyah', age: 4 },
    { id: 9, name: 'Lokum', breed: 'Ragdoll', color: 'Beyaz-Gri', age: 3 },
    {
      id: 10,
      name: 'Tarçın',
      breed: 'Maine Coon',
      color: 'Kahverengi',
      age: 5,
    },
  ];

  // Tüm kedileri getiren method
  getAllCats() {
    return this.cats;
  }

  // ID'ye göre kedi getiren method
  getCatById(id: number) {
    const cat = this.cats.find((cat) => cat?.id === id);
    if (!cat) {
      throw new Error('Kedi bulunamadı');
    }
    return cat;
  }

  // İsme göre kedi getiren method
  getCatByName(name: string) {
    const cat = this.cats.find(
      (cat) => cat.name.toLowerCase() === name.toLowerCase(),
    );
    if (!cat) {
      throw new Error('Kedi bulunamadı');
    }
    return cat;
  }

  createCat(createCatDto: CreateCatDto) {
    const newCat = {
      id: this.cats.length + 1,
      ...createCatDto,
    };

    this.cats.push(newCat);
    return newCat;
  }
}
