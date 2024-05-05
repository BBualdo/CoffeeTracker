using CoffeeTracker.WebAPI.Data;
using CoffeeTracker.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CoffeeTracker.WebAPI.Repositories;

public class CoffeeRepository : ICoffeeLogsRepository
{
  private readonly CoffeeTrackerContext _context;

  public CoffeeRepository(CoffeeTrackerContext context)
  {
    _context = context;
  }

  public async Task AddAsync(CoffeeLog log)
  {
    await _context.Records.AddAsync(log);
    await _context.SaveChangesAsync();
  }

  public async Task Delete(CoffeeLog log)
  {
    CoffeeLog coffeeLog = await _context.Records.SingleAsync(l => l == log);
    _context.Records.Remove(log);
    await _context.SaveChangesAsync();
  }

  public async Task<IEnumerable<CoffeeLog>> GetAllAsync()
  {
    return await _context.Records.ToListAsync();
  }

  public async Task<CoffeeLog?> GetByIdAsync(int id)
  {
    return await _context.Records.FindAsync(id);
  }

  public async Task UpdateAsync(CoffeeLog log)
  {
    _context.Entry(log).State = EntityState.Modified;
    await _context.SaveChangesAsync();
  }
}
